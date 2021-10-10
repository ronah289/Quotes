export class Quote {
    showInformation!:boolean;
    constructor(public id:number,public author:string,public user:string,public quoteTitle:string,public describe:string,public upvotes:number,public downvotes:number,public addDate:Date){
        this.showInformation = false;
    }
}