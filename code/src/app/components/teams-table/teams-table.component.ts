import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teams : any;
  constructor() { }

  ngOnInit() {

    this.teams=[
      { id : 1, name :"messi" , foundation :"atk" , owner :"hghjg", stadium : "bhbhg" },
      {id : 2, name :"messi" , foundation :"atk" , owner :"hghjg", stadium : "bhbhg" },
      { id : 3,name :"messi" , foundation :"atk" , owner :"hghjg", stadium : "bhbhg" },
      { id : 4, name :"messi" , foundation :"atk" , owner :"hghjg", stadium : "bhbhg" },

    ]
  }

}
