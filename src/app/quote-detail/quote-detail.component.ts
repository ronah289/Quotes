import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!:Quote;
  @Output() deleteThis = new EventEmitter<boolean>();
  deleteMe(deleteNow:boolean){
    this.deleteThis.emit(deleteNow);
  }
  AddLike(){
    this.quote.upvotes++;
  }
  AddDislike(){
    this.quote.downvotes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
