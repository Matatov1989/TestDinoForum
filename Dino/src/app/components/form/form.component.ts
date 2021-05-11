import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SimpleService } from '../../services/service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public subs: Subscription;
  public userName: string;

  postsList: PostData[];
  commentsList: CommentData[];

  constructor(
    private simpleService: SimpleService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log("**FORM**");
    //get all posts (object to list)
    this.postsList = JSON.parse(localStorage.getItem("test11"));
    //get user name from service for json data
    this.subs = this.simpleService.userName
      .subscribe(name => this.userName = name)
  }

  //click buttons edit a post or write a comment topost
  onClickBtn(post: string, type: string): void {
    localStorage.setItem("post", JSON.stringify(post));
    localStorage.setItem("flagPost", type);
    this.router.navigateByUrl('/edit-post');
  }

  //open snacck bar if user in not log in
  openSnackBar(): void {
    this.snackBar.open("Log In, Please!", "OK");
  }
}
