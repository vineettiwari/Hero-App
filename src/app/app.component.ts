import { Component, OnInit } from '@angular/core';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title: string = 'Tour Of Heroes';

    // heroes: Hero[] = null;
    // selectedHero: Hero = null;

    // constructor(private _heroService: HeroService) { }

    ngOnInit() {
        // this.getHeroes();
    }

    // getHeroes() {
    //     this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    // }

    // selectHero(index: number) {
    //     this.selectedHero = this.heroes[index];
    //     console.log(this.selectedHero.name + " was selected.");
    // }
}
