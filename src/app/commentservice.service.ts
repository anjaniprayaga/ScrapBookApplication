import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {
  listChangedEvent : EventEmitter<Comment[]> = new EventEmitter();
    listOfComments: Comment[] = []

  constructor() { }

  getComments() {
    return this.listOfComments;
}
deleteComments(index: number){
    this.listOfComments.splice(index, 1);
}

addComment(comment: Comment){
    this.listOfComments.push(comment);
}

updateComment(index:number,post: Comment){
    this.listOfComments[index]=post;
}
}


