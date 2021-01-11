import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {


  }

}
