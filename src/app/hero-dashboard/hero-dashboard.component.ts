import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
    selector: 'app-hero-dashboard',
    templateUrl: './hero-dashboard.component.html',
    styleUrls: ['./hero-dashboard.component.css']
})

export class HeroDashboardComponent implements OnInit {
    heroes: Hero[] = null;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
}
