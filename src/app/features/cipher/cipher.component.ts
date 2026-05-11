import { Component } from '@angular/core';
import { CipherService } from '../../services/cipher.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cipher',
  imports: [FormsModule, CommonModule],
  templateUrl: './cipher.component.html',
  styleUrl: './cipher.component.css',
  standalone: true
})
export class CipherComponent {
  textToEncrypt = '';
  encryptStep = 3;
  generatedHash = '';

  textToDecrypt = '';
  decryptHash = '';
  decryptedText = '';

  constructor(private cipherService: CipherService) {}

  onEncrypt() {
    this.cipherService.encrypt(this.textToEncrypt, this.encryptStep).subscribe({
      next: (res) => {
        this.generatedHash = res.hash;
      },
      error: (err) => alert('Erro ao criptografar')
    });
  }

  onDecrypt() {
    this.cipherService.decrypt(this.textToDecrypt, this.decryptHash).subscribe({
      next: (res) => {
        this.decryptedText = res.textoClaro;
      },
      error: (err) => {
        alert('Hash inválido ou já utilizado anteriormente!');
      }
    });
  }
}
