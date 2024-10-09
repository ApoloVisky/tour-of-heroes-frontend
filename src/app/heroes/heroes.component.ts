import { Component, OnInit } from '@angular/core';


import { Hero } from './hero.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  hero: Hero =  {
    id: 1,
    nome: "Wolverine"
  };

  constructor() { }

  ngOnInit(): void {

  }

}
