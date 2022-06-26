import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
title: string
playerForm:FormGroup
player:any={}
id : any;
players: any=[];
  constructor(private activatedRoute :ActivatedRoute, private playerServer: PlayerService) { }

  ngOnInit() {
    
      

    this.id=this.activatedRoute.snapshot.paramMap.get('id')

if(this.id){
this.title="edit player"
  this.playerServer.getplayerById(this.id).subscribe((data)=>{
    this.player=data
  })
}
else{
  this.title="add"
}

   
  }


  addOrEditPlayer(){
console.log('houni player',this.player);
if(this.id){

}

  }
}
