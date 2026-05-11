import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CipherService {
  private readonly API_URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  encrypt(message: string, step: number): Observable<any> {
    return this.http.post(`${this.API_URL}/criptografar`, {
      mensagem: message,
      passo: step
    });
  }

  decrypt(encryptedMessage: string, hash: string): Observable<any> {
    return this.http.post(`${this.API_URL}/descriptografar`, {
      mensagemCifrada: encryptedMessage,
      hash: hash
    });
  }
}
