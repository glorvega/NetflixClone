import { NavInterface } from './../../models/movieInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navInfo: NavInterface;
  constructor() { 
    this.navInfo = {
      logo: {
        src: "../../../assets/bedflix.png",
        alt: "bedflix logo",
      },
      links: [{
        text: "inicio",
        link: "#inicio"
      },{
        text: "buscar",
        link: "#buscar"
      }]
    }
  }

  ngOnInit(): void {
  }

}
