import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm:FormGroup;
  match : any={};
  constructor() { }

  ngOnInit() {
  }

add(){
console.log("match" , this.match);


}

}
