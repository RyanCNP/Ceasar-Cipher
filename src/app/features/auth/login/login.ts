import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  credentials = { email: '', senha: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log("Chamando função cadastro")
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        alert('Ave, Legionário! Login realizado.');
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert('Erro ao validar credenciais: ' + err.error.message);
      }
    });
  }
}
