import { Component, OnInit } from '@angular/core';
import { PortfolioWebService } from 'src/app/servicios/portfolio-web.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaDeList:any;
  constructor(private datosPortfolio:PortfolioWebService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.acercaDeList=data.acercaDe
    })
  }

}
