import { ActivatedRoute } from '@angular/router';
import { Heroe } from './../../interfaces/heroe';
import { HeroesService } from './../../services/heroes.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  heroes : Heroe[];
  cadenaBusqueda : string;

  constructor(private heroesService: HeroesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cadenaBusqueda = params['texto'];
      this.heroes = this.heroesService.buscarHeroes(this.cadenaBusqueda);
    });
  }

}
