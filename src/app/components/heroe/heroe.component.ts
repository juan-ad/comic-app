import { Heroe } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private route: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params["id"]);
    });
  }

}
