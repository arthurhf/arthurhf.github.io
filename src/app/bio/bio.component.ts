import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  private navCollapse:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  navController(){
    console.log('hamburguer clicked');
    if(!this.navCollapse){
      document.getElementById('navbarNavAltMarkup').classList.add('show');
      this.navCollapse = true;
    }
    else{
      document.getElementById('navbarNavAltMarkup').classList.remove('show');
      this.navCollapse = false;
    }
    
  }

}
