import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  private jbtHeading:string;
   private jbtText:string;
   private jbtBtnText:string;
   private jbtBtnUrl:string;

  constructor() { 

       this.jbtHeading="Indian Railway";
       this.jbtText = "Indian Railways is the world's eighth biggest employer and had 1.331 million employees at the end of 2015-16.[3] In 2015–2016 Indian Railways had revenues of ₹1.683 trillion (US$25 billion) which consists of ₹1.069 trillion (US$16 billion) freight earnings and ₹442.83 billion (US$6.6 billion) passengers earnings.";
       this.jbtBtnText = "See More";
       this.jbtBtnUrl= 'https://en.wikipedia.org/wiki/Indian_Railways'; 

  }

  ngOnInit() {
  }

}
