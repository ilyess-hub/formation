import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm : FormGroup
  team : any={}
  constructor() { }

  ngOnInit() {
  }


  add(){
    console.log(this.team);
    
  }
}
