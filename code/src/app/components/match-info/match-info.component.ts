import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  id : any;
  matches : any
  foundedMatch : any
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    //a importer dans fichier : matches
    this.matches=[

      {id :1, scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" }, 
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :4,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
    ]



    this.id=this.activatedRoute.snapshot.paramMap.get("id")
  for (let i = 0; i < this.matches.length; i++) {
if (this.matches[i].id==this.id) {
  this.foundedMatch=this.matches[i]
  break
}    
  }
  
  
  }

}
