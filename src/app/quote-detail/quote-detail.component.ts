import { Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quoteProperties!:Quote;
  @Output() deleteThis = new EventEmitter<boolean>();
  deleteMe(deleteNow:boolean){
    this.deleteThis.emit(deleteNow);
  }
  Upvote(){
    this.quoteProperties.upvotes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
