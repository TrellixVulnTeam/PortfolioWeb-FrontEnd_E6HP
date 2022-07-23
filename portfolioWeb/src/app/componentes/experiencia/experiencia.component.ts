import { Component, OnInit } from '@angular/core';
import { PortfolioWebService } from 'src/app/servicios/portfolio-web.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  constructor(){}
  /*
  experienciaList:any;
  constructor(private datosPortfolio:PortfolioWebService) { }
*/
  ngOnInit(): void {
  /*  
    this.datosPortfolio.obtenerDatos().subscribe(data=>)
    this.experienciaList=data.experiencia;
  */
  }

}
