import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
playerForm : FormGroup
player : any={}
  constructor() { }

  ngOnInit() {
  }

  add(){
    console.log(this.player);
    
  }

}
