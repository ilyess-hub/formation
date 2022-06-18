  import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {
editForm : FormGroup
match : any;
id : any;
matches: any;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {

    this.matches=[

      {id :1, scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" }, 
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :3,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
      {id :4,scoreOne :1 , scoreTwo:3 , teamOne :"atk" , teamTwo :"atk" },
    ]

    this.id=this.ar.snapshot.paramMap.get("id")
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id==this.id) {
        this.match=this.matches[i]
        break
      }    
        }
  }



  edit(){
alert('clicked')

  }
}
