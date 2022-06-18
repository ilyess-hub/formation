import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players : any;
  constructor() { }

  ngOnInit() {
this.players =[
{id :1 , name :"messi" , position :"atk" , nbr :10 },
{id :2 , name :"ronaldo" , position :"dfs" , nbr : 10},
{id : 3, name : "msekni", position :"dfs" , nbr :10 },

]

  }

}
