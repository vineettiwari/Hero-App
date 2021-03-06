import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        component: HeroListComponent
    },
    {
        path: 'dashboard',
        component: HeroDashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
