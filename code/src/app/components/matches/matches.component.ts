import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches : any=[];
  constructor() { }

  ngOnInit() {
    this.matches=[


      {scoreOne : 1 , scoreTwo: 3 , teamOne : "bhbjb", teamTwo:"hbhjb"},
      {scoreOne : 2 , scoreTwo: 4 , teamOne : "bhbjb", teamTwo:"hbhjb"},
      {scoreOne : 4 , scoreTwo: 4 , teamOne : "bhbjb", teamTwo:"hbhjb"},
      {scoreOne : 4 , scoreTwo: 4 , teamOne : "bhbjb", teamTwo:"hbhjb"},
    ]


  }

}
