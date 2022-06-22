import { HeaderInterface } from './../../models/movieInterface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public headerInfo: HeaderInterface;
  constructor() { 
    this.headerInfo = {
      title: "Las más populares en España hoy",
      gallery: [{
        position: 1,
        src: "../../../assets/images/Top10/ozark-poster.jpg",
        alt: "Ozark"
      },{
        position: 2,
        src: "../../../assets/images/Top10/vikings.jpg",
        alt: "Vikings"
      },{
        position: 3,
        src: "../../../assets/images/Top10/BCS.webp",
        alt: "BCS"
      },{
        position: 4,
        src: "../../../assets/images/Top10/peaky.jpg",
        alt: "Peaky Blinders"
      }]
    }
  }

  ngOnInit(): void {
  }

}
