import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {
  editForm: FormGroup
  match: any = {};
  id: any;
  matches: any = [];

  constructor(private ar: ActivatedRoute , private matchServer:MatchService) { }

  ngOnInit() {
   
this.id=this.ar.snapshot.paramMap.get('id')

   this.matchServer.getMatchById(this.id).subscribe((data)=>{
    this.match=data
   })
  }



  edit() {


  }
}
