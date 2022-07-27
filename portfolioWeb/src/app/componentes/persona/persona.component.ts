import { Component, OnInit } from '@angular/core';
import { PortfolioWebService } from 'src/app/servicios/portfolio-web.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  dataTitulos:any;
  dataPortfolio:any;
  constructor(private datosPortfolio : PortfolioWebService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataPortfolio=data;
      this.dataTitulos=data.titulo;
      console.log(this.dataPortfolio);
      console.log(this.dataTitulos);
    })
     
  }

  
}