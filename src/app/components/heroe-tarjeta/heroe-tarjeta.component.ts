import { Heroe } from './../../interfaces/heroe';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()
  heroe: Heroe;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    this.router.navigate(['/heroe', this.heroe.id]);
  }
}
