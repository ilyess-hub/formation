import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
id : any;
players: any;
foundedPlayer : any
  constructor(private activatedRoute : ActivatedRoute, private playerService : PlayerService) { }

  ngOnInit() {
this.id=this.activatedRoute.snapshot.paramMap.get('id')
this.playerService.getplayerById(this.id).subscribe((data)=>{
  this.foundedPlayer=data
})


  }

}
