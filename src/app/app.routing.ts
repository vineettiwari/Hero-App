import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const routes: Routes = [
    {
        path: 'heroes',
        component: HeroListComponent,
    },
    {
        path: 'heroes/:id',
        component: HeroDetailComponent
    },
    {
        path: '**',
        redirectTo: './',
        pathMatch: 'full'
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
