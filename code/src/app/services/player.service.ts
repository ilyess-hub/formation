import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient : HttpClient) { }

  playerURL:string='http://localhost:3000/players'


addplayer(player: any) { 
  return this.httpClient.post(this.playerURL, player);
 }


 getAllplayeres() {
  return this.httpClient.get(this.playerURL);
 }

 getplayerById(id: any) {

   return this.httpClient.get(this.playerURL+"/"+id)
 }

 deleteplayerById(id: any) {

  return this.httpClient.delete(this.playerURL+"/"+id)
}


updateplayer(player : any){
  return this.httpClient.put(this.playerURL +"/" + player.id ,player)
}



}
