export class Post{
    constructor(
        public title: string,
        public description: string,
        public imagePath: string,
        public author: string,
        public datetimeCreated: Date,
        public numberOfLikes: number
    ){}
}