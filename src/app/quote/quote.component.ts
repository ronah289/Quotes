import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  subtitle:string = 'Added Quotes';

  listOfQuotes:Quote[]=[
    new Quote(0,'eliud kipchoge','dickson onyanja','no human is limited','unlimited greatness',0,0,new Date(2021,4,2)),
    new Quote(1,'barrack obama','brian koech','god is able','trust in god',0,0,new Date(2016,5,4)),
  ];
  showInfo(index:any){
    this.listOfQuotes[index].showInformation = !this.listOfQuotes[index].showInformation;
  }
  deleteMe(deleteThis:any, index:any){
    if (deleteThis) {
      let deleteConfirmation = confirm(`Delete This Quote?`)
      if(deleteConfirmation){
        this.listOfQuotes.splice(index,1);
      }
    }
  }
  addNewQuote(newQuote:any){
    let quoteLength = this.listOfQuotes.length;
    newQuote.id = quoteLength+1;
    newQuote.addDate = new Date(newQuote.adddate);
    this.listOfQuotes.push(newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
