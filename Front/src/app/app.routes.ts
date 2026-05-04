import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EducationComponent } from './features/education/education.component';
import { CipherComponent } from './features/cipher/cipher.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'curiosidades', component: EducationComponent},
    {path: 'cifra', component: CipherComponent}
];
