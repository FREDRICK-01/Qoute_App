import { Component, OnInit } from '@angular/core';
import { Qoute } from '../qoute';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  title = 'welcome to tech quotes';
  quotes:Quote[] = [
    new Quote (1,'Freddie','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2021,8,21),0,0),
    new Quote (2,'Grace','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2021,8,21),0,0),
    new Quote (3,'Nick','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2021,8,21),0,0),
    new Quote (4,'Jane','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2021,8,20),0,0),
    new Quote (5,'Antony','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,8,21),0,0),
    new Quote (6,'Yvonne','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2021,8,21),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
