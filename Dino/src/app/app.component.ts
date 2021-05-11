import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { SimpleService } from './services/service';

import postsData  from '../assets/data.json';

export interface DialogData {
  userName: string;
}

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dino';

  public userName: string;

  public postsList: PostData[] = postsData;

  constructor(public dialog: MatDialog,
    private readonly simpleService: SimpleService,
    private router: Router) {}

  ngOnInit(): void {
    console.log("*START*");

    localStorage.setItem("jsonPostsData", JSON.stringify(this.postsList));
    //open welcome dialog for enter user name
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogWelcome, {
      width: '250px',
      data: {userName: this.userName}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userName = result;
      //seve user name for a using in edit-post.component
      this.simpleService.saveName(this.userName);
    });
  }

  onClick(): void {
    localStorage.setItem("flagPost", "new");
    //go to edit-post.component
    this.router.navigateByUrl('/edit-post');
  }
}

@Component({
  selector: 'dialog-welcome',
  templateUrl: './dialog-welcome.html',
})
export class DialogWelcome {

  constructor(
    public dialogRef: MatDialogRef<DialogWelcome>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
