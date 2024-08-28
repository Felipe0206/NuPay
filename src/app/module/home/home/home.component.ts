import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from 'src/app/core/services/modoOscuro/theme-mode.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  mode!: string;
  computer = '../../../../assets/images/computer.png';
  Colash1 = '../../../../assets/images/Colash1.png';
  Colash2 = '../../../../assets/images/Colash2.png';
  targeta = '../../../../assets/images/targeta.png';
  Beneficio = '../../../../assets/images/Beneficio.png';
  wallet = '../../../../assets/images/wallet.png';
  Visa = '../../../../assets/images/Visa.png';
  Efecty = '../../../../assets/images/Efecty.png';
  PSE = '../../../../assets/images/PSE.png';
  Nequi = '../../../../assets/images/Nequi.png';
  cel = '../../../../assets/images/cel.png';
  Footer = '../../../../assets/images/Footer.png';
  constructor(private themeModeService: ThemeModeService) { }

  ngOnInit(): void {
    this.themeModeService.getMode().subscribe(mode => this.mode = mode);
  }

}
