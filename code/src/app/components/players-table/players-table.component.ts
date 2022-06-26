import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players : any;
id: any;
  constructor(private router : Router, private playerService : PlayerService) { }

  ngOnInit() {

this.playerService.getAllplayeres().subscribe((data)=>{
  this.players=data
})


  }

goToDisplay(id :number){
  this.router.navigate([`playerInfo/${id}`])
}


  goToEditPlayer(id : any){
    this.router.navigate([`editPlayer/${id}`])


}}
