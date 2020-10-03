import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css'],
  providers: [SpotifyService]
})
export class SpotifyComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {
    const parametros = this.getHashParams();
    //const token = parametros.access_token;
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  ngOnInit(): void {
    console.log(this.spotifyService)
  }

}
