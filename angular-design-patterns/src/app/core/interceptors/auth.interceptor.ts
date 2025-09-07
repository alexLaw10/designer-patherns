import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.getCurrentUser();
    
    if (currentUser) {
      // Adiciona token de autorização se usuário estiver logado
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.id}` // Simulação de token
        }
      });
    }

    return next.handle(request);
  }
}
