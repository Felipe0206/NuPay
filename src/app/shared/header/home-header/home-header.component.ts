import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from 'src/app/core/services/modoOscuro/theme-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  mode: string = 'light'; // Define la propiedad 'mode' con un valor predeterminado
  menuOpen = false;

  constructor(
    private themeModeService: ThemeModeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtén el modo actual desde el servicio y actualiza la propiedad 'mode'
    this.themeModeService.getMode().subscribe(mode => {
      this.mode = mode;
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  
}
