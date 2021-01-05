import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit{
  spotifyUser : Observable<any>;
  //private readonly API = 'https://api.spotify.com/v1/users/'
  //private readonly user_id = 'K5SZuskzQ9O1GtuLLsagug'

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(){
    //const  params = new  HttpParams().set('Accept', 'application/json').set( 'Content-Type', 'application/json').set('Authorization', 'Bearer BQAzqTc49pw09RSXZEMIxsnW2q2aSuHLZLzsvAFF5rRI2lsf8x_sgd-10j9hB8QAFa0XWLDUe0d-LfwzkJzY14fS9MB_IesDz0hXWrFUWuguEEVr2LOBewE278Dq47iIuMV3-EC4RLiGKLe-p03HgH0zzWM0')
    

    //this.spotifyUser = this.http.get<any>(this.API + this.user_id, {params})
    //console.log(this.spotifyUser)
    
  }

}
