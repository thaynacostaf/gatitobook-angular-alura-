import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import { TokenService } from '../autenticacao/token.service';
import { Animais } from './animais';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Animais>(`$API/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}