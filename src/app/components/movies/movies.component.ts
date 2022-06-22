import { Component, Input, OnInit } from '@angular/core';
import { MoviesInterface } from 'src/app/models/movieInterface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
//Le tenemos que poner la exclamación a la variable recibida por input movie! para asegurarle al componente que va a recibir si o si la información
@Input() public movies!: MoviesInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
