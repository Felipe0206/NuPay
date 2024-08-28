import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from 'src/app/core/services/modoOscuro/theme-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <label class="switch">
      <input type="checkbox" (change)="toggleTheme()" [checked]="isDarkMode" />
      <span class="slider"></span>
    </label>
  `,
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode = false;

  constructor(private themeModeService: ThemeModeService) {}

  ngOnInit(): void {
    this.themeModeService.getMode().subscribe(mode => {
      this.isDarkMode = mode === 'dark';
    });
  }

  toggleTheme() {
    this.themeModeService.toggleMode();
  }
}
