export class Quote {
    showInformation!:boolean;
    constructor(public author:string,public user:string,public quote:string,public describe:string,public upvotes:number,public downvotes:number,public addDate:Date){
        this.showInformation = false;
    }
}