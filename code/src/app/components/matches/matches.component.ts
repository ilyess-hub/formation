import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  constructor() { }
matches: any
  ngOnInit() {
  //  a importer dans fichier : matches
    this.matches=[

      {id :1, scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" }, 
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :4,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
    ]


  }

}
