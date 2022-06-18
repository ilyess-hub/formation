import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm :FormGroup; 
//loginform identifiant
user : any={};
  constructor() { }

  ngOnInit() {
  }



  login(){
    alert("login clicked")    
    console.log("user here", this.user);
  }
}
