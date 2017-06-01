import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero = null;
    id: number;
    sub: any;

    constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];

        this.heroService.getHeroes().then(heroes => {
            for (var i = 0; i < heroes.length; i++) {
                if (heroes[i].id === id) {
                    this.hero = heroes[i];
                }
            }
            console.log(this.hero);
        });
    }

    popView() {
        this.location.back();
    }
}
