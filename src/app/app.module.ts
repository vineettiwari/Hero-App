import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { AboutComponent } from './about/about.component';


@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroListComponent,
        HeroDashboardComponent,
        AboutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouting
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
