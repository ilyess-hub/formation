import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
matches : any;
  constructor(private router: Router) { }

  ngOnInit() {

    this.matches=[

      {id :1, scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" }, 
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :4,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
    ]
  }

goToDisplay(id :number){
  alert("display matches")

  this.router.navigate([`matchInfo/${id}`]);
}


goToEdit(id :number){
  alert("display matches")

  this.router.navigate([`editMatch/${id}`]);
}


}
