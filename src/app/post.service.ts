import { InvokeMethodExpr } from "@angular/compiler";
import {EventEmitter, Injectable } from "@angular/core";
//import { EventEmitter } from "stream";
import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  listChangedEvent : EventEmitter<Post[]> = new EventEmitter();
    listOfPosts: Post[] = [
        new Post(
          'Taj Mahal',
          'The Taj Mahal is known the world over for its beautiful architecture, history and the tale of love that led to its creation. Located in the Indian city of Agra, the Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan as a testament of his love for his departed wife Mumtaz Mahal',
          'https://static.india.com/wp-content/uploads/2020/04/Taj-Mahal-Insta.jpg',
          'test@gmail.com',
          new Date(),
          5
        ),
        new Post(
          'Colosseum',
          'Also known as the Flavian Amphitheatre, the Colosseum is an oval-shaped amphitheater located in the centre of Rome in Italy. Built with concrete and sand, its construction began under Emperor Vespasian in AD 72 and it was completed by his successor, Titus, in AD 80. It is the largest amphitheater in the world, and had the capacity to host about 80,000 spectators.',
          'https://static.india.com/wp-content/uploads/2020/04/The-Colosseum.jpg',
          'test@gmail.com',
          new Date(),
          5
        ),
        new Post(
          'Machu Picchu',
          'Located in the Eastern Cordillera of southern Peru on a 7,970 ft mountain ridge, Machu Picchu is a 15th-century Inca citadel. It is the most familiar icon of Inca civilization, and is often mistaken for the ‘Lost City of the Incas’.',
          'https://static.india.com/wp-content/uploads/2020/04/Machu-Picchu.jpg',
          'test@gmail.com',
          new Date(),
          5
        ),
    ];

    getPosts() {
        return this.listOfPosts;
    }
    deletePost(index: number){
        this.listOfPosts.splice(index, 1);
    }
    
    addPost(post: Post){
        this.listOfPosts.push(post);
    }

    updatePost(index:number,post: Post){
        this.listOfPosts[index]=post;
    }

    getPost(index: number){
      
      return this.listOfPosts[index]

    }
    likePost(index: number){
      this.listOfPosts[index].numberOfLikes += 1;

    }

    setPosts(listOfPosts: Post[]){
      this.listOfPosts=this.listOfPosts;
      this.listChangedEvent.emit(listOfPosts)
    }
}