import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //adress BE
  matchURL:string='http://localhost:3000/matches'
  constructor(private httpClinet : HttpClient) { }


addMatch(match: any) { 
  return this.httpClinet.post(this.matchURL, match);
 }


 getAllMatches() {
  return this.httpClinet.get(this.matchURL);
 }

 getMatchById(id: any) {

   return this.httpClinet.get(this.matchURL+"/"+ id)
 }

 deleteMatchById(id: any) {

  return this.httpClinet.delete(this.matchURL+"/"+id)
}


updateMatch(match : any){
  return this.httpClinet.put(this.matchURL +"/" + match.id ,match)
}

}
