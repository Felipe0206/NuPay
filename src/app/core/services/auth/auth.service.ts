import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface RegisterData {
  fullname: string;
  lastname: string;
  email: string;
  countryCode: string;
  mobil: string;
  password: string;
  acceptTerms: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  
  private authUrl = 'your-api-url';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { email, password });
  }
  register(data: RegisterData): Observable<any> {
    return this.http.post('/api/register', data);
  }

  getUserByToken(token: string): Observable<any> {
    return this.http.get(`${this.authUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  saveAuth(auth: any): void {
    localStorage.setItem('auth', JSON.stringify(auth));
  }

  setCurrentUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
