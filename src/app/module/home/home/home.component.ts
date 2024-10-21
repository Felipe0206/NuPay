import { Component, OnInit } from '@angular/core';
import { ThemeModeService } from 'src/app/core/services/modoOscuro/theme-mode.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  mode!: string;
  computer = '../../../../assets/images/1.png';
  Colash1 = '../../../../assets/images/Colash-1.png';
  Colash2 = '../../../../assets/images/Colash-2.png';
  targeta = '../../../../assets/images/targeta-1.png';
  Beneficio = '../../../../assets/images/Mesa de trabajo 34 (1).png';
  wallet = '../../../../assets/images/wallet.png';
  Visa = '../../../../assets/images/Visa.png';
  Efecty = '../../../../assets/images/Efecty.png';
  PSE = '../../../../assets/images/PSE.png';
  Nequi = '../../../../assets/images/Nequi.png';
  cel = '../../../../assets/images/cel-1.png';
  Footer = '../../../../assets/images/Footer-1.png';
lo: any;
  constructor(private themeModeService: ThemeModeService) { }

  ngOnInit(): void {
    this.themeModeService.getMode().subscribe(mode => this.mode = mode);
  }

}
