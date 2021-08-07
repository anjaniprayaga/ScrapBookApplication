import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentserviceService } from '../commentservice.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment?: Comment;
  @Input() index: number=0;

  constructor(private commentService: CommentserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  onDelete(){
    console.log("onDelete() called!");
    this.commentService.deleteComments(this.index);
  }
  onEdit(){
    console.log("onEdit() function called!")
    this.router.navigate(["/comment", this.index])
  }

}
