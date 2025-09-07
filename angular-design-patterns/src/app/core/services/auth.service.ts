

yimport { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() { }

  /**
   * Login do usuário
   */
  login(email: string, password: string): Observable<boolean> {
    // Simulação de login - em produção, faria chamada para API
    return new Observable(observer => {
      setTimeout(() => {
        if (email === 'admin@example.com' && password === '123456') {
          const user: User = {
            id: 1,
            name: 'Admin User',
            email: email,
            role: 'admin'
          };
          this.currentUserSubject.next(user);
          localStorage.setItem('currentUser', JSON.stringify(user));
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  /**
   * Logout do usuário
   */
  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  /**
   * Verifica se usuário está logado
   */
  isLoggedIn(): boolean {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
      return true;
    }
    return false;
  }

  /**
   * Retorna usuário atual
   */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
