import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  // BehaviorSubject para manejar el estado del tema con 'light' como valor inicial
  private modeSubject = new BehaviorSubject<string>('light');
  private pageClassSubject = new BehaviorSubject<string>('app-root');
  pageClass$ = this.pageClassSubject.asObservable();

  constructor() {
    // Al iniciar el servicio, se obtiene el tema almacenado en localStorage o se establece 'light' por defecto
    const savedMode = localStorage.getItem('theme') || 'light';
    this.modeSubject.next(savedMode);
    this.applyTheme(savedMode);
  }

  // Método para obtener el Observable del modo
  getMode() {
    return this.modeSubject.asObservable();
  }

  // Método para cambiar el modo y aplicarlo
  toggleMode() {
    const newMode = this.modeSubject.value === 'light' ? 'dark' : 'light';
    this.modeSubject.next(newMode);
    this.applyTheme(newMode);
  }

  // Método para aplicar el tema al documento y guardarlo en localStorage
  private applyTheme(mode: string) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }

  setPageClass(className: string): void {
    this.pageClassSubject.next(className);
  }

  getPageClass(): string {
    return this.pageClassSubject.getValue();
  }
}
