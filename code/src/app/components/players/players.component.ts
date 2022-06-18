import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
//pere
players : any=[];
  constructor() { }

  ngOnInit() {
this.players=[
  {playerName : "bhjbhjbh", position:"atk",nbr:10},
  {playerName : "bhjbhjbh", position:"atk",nbr:10},
  {playerName : "bhjbhjbh", position:"atk",nbr:10},
  {playerName : "bhjbhjbh", position:"atk",nbr:10},
  

]

  }

}
