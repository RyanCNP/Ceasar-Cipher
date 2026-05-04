import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EducationComponent } from './features/education/education.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'curiosidades', component: EducationComponent},
];
