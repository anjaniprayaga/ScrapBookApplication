import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}
  // Database Path
  //https://live-posts-4057c-default-rtdb.firebaseio.com/

  saveData() {
    const listOfPosts: Post[] = this.postService.getPosts();

    this.http
      .put(
        'https://live-posts-4057c-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  fetchData() {
    this.http
      .get<Post[]>(
        'https://live-posts-4057c-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          this.postService.setPosts(listOfPosts)
        })
      )
      .subscribe();
  }
}
