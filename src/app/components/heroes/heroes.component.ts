import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  get heroes(){
    return this.heroesService.getHeroes();
  }
}
