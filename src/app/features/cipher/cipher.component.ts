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
  // Variáveis para Criptografia
  textToEncrypt = '';
  encryptStep = 3;
  generatedHash = '';

  // Variáveis para Descriptografia
  textToDecrypt = '';
  decryptHash = '';
  decryptedText = '';

  constructor(private cipherService: CipherService) {}

  onEncrypt() {
    this.cipherService.encrypt(this.textToEncrypt, this.encryptStep).subscribe({
      next: (res) => {
        this.generatedHash = res.hash; // Hash que servirá como chave privada [cite: 24]
        // Você também pode exibir a mensagem cifrada aqui
      },
      error: (err) => alert('Erro ao criptografar')
    });
  }

  onDecrypt() {
    this.cipherService.decrypt(this.textToDecrypt, this.decryptHash).subscribe({
      next: (res) => {
        this.decryptedText = res.textoClaro; // Exibe a mensagem original [cite: 36]
      },
      error: (err) => {
        // Exibe mensagem de erro caso o hash seja inválido ou já usado [cite: 37, 48]
        alert('Hash inválido ou já utilizado anteriormente!');
      }
    });
  }
}
