import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyService } from './services/spotify.service';
import { BioComponent } from './bio/bio.component';
import { AbtMeComponent } from './abt-me/abt-me.component';
import { HelloComponent } from './hello/hello.component';
import { routing } from './app.routing';
import { SomethingComponent } from './something/something.component';
import { InterestingComponent } from './interesting/interesting.component';
import { WhateverComponent } from './whatever/whatever.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    BioComponent,
    AbtMeComponent,
    HelloComponent,
    SomethingComponent,
    InterestingComponent,
    WhateverComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
