import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  listOfQuotes:Quote[]=[
    new Quote('eliud kipchoge','dickson onyanja','no human is limited','unlimited greatness',0,0,new Date(2021,4,2)),
    new Quote('barrack obama','brian koech','god is able','trust in god',0,0,new Date(2016,5,4)),
  ];
  showInfo(index:any){
    this.listOfQuotes[index].showInformation = !this.listOfQuotes[index].showInformation;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
