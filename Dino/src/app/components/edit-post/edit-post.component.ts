import { Component, VERSION, Injectable, OnInit, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { SimpleService } from '../../services/service';

export interface PostData {
  id: number;
  name: string;
  date: string;
  text: string;
  comments: CommentData[];
}
export interface CommentData {
  name: string;
  text: string;
}

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [DatePipe]
})

export class EditPostComponent implements OnInit, OnDestroy {

	public subs: Subscription;
  public userName: string;

  post: string;
  flagPost: string;
  idPost: number;
  postData: PostData;
  commentData: CommentData;
  message: string;
  currentDateLong: any = Date.now();  //for id user
  currentDateStr: string;             //for date post user

  postsList: PostData[];
  commentList: CommentData[];

  constructor(
    public datePipe: DatePipe,
    private simpleService: SimpleService,
    private router: Router) {

    //get current date  (example: Jun 21, 2010, 11:30)
    this.currentDateStr = this.datePipe.transform(this.currentDateLong, 'MMM d, y, HH:MM');
  }

  ngOnInit(): void {
    console.log("***EDIT POST*** ");

    //get flag post
    this.flagPost = localStorage.getItem("flagPost");
    if(this.flagPost == "edit" || this.flagPost == "comment"){
      //get a post
      this.post = localStorage.getItem("post");
      this.postData = JSON.parse(this.post);

      //set to message if flagPost = edit
      this.message = this.flagPost == "comment" ? "" : this.postData.text;

      this.idPost = this.postData.id;
    }

    //get all posts (object to list)
    this.postsList = JSON.parse(localStorage.getItem("jsonPostsData"));

    //get user name from service for json data
    this.subs = this.simpleService.userName
      .subscribe(name => this.userName = name)
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();  //resets subs
  }

  //function of jodit
  handleEvent(event: Event){ }

  //send post from jodit-editor to json data
  onClickSendPost(): void {
    //checking operation (new post, edit post, new comment to post)
    if(this.flagPost == "edit")
      this.updatePostById();
    else if (this.flagPost == "comment")
      this.addCommentToPostById();
    else
      this.addNewPost();

    //go back to form.component
    this.router.navigateByUrl('/forum');
  }

  //add a new post
  addNewPost(): void {
    //set variables to post data
    this.postData = {
      id: this.currentDateLong,
      name: this.userName,
      date: this.currentDateStr,
      text: this.message,
      comments: []
    };
    //add a new post to list
    this.postsList.push(this.postData);
    //save json to local storage
    localStorage.setItem("jsonPostsData", JSON.stringify(this.postsList));
  }

  //update post by id post
  updatePostById(): void {
    for (let post of this.postsList) {
      if (post.id == this.idPost) {
        post.text = this.message; //set new text
        //save json to local storage
        localStorage.setItem("jsonPostsData", JSON.stringify(this.postsList));
        break;
      }
    }
  }

  //add a comment to the post by id post
  addCommentToPostById(): void {
    this.commentData = {
      name: this.userName,
      text: this.message
    };

    for (let post of this.postsList) {
      if (post.id == this.idPost) {
        //add new comment to post
        post.comments.push(this.commentData);
        //save json to local storage
        localStorage.setItem("jsonPostsData", JSON.stringify(this.postsList));
        break;
      }
    }
  }
}
