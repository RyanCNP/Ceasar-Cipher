import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { EducationComponent } from './features/education/education.component';
import { CipherComponent } from './features/cipher/cipher.component';
import { RegisterComponent } from './features/auth/register/register';
import { LoginComponent } from './features/auth/login/login';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'curiosidades', component: EducationComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'cifra',
    component: CipherComponent,
    canActivate: [authGuard]
  }
];
