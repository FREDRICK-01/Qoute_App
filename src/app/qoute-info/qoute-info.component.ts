import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter } from 'stream';
import { Quote } from '../qoute';

@Component({
  selector: 'app-qoute-info',
  templateUrl: './qoute-info.component.html',
  styleUrls: ['./qoute-info.component.css']
})
export class QouteInfoComponent implements OnInit {
  @Input() quote: Quote;
  @Input() isRead = new EventEmitter<boolean>();
  deleteQuote (read:boolean) {
    this.isRead.emit(read);
  }
  upvote (){
    this.quote.likes+=1;
  }
  downvote(){
    this.quote.dislikes+=1;
  }

  constructor() { }

  ngOnInit(){
  }

}
