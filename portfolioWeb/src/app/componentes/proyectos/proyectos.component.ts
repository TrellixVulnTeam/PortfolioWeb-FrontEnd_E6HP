import { Component, OnInit } from '@angular/core';
import { PortfolioWebService } from 'src/app/servicios/portfolio-web.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  dataProyecto:any;
  constructor(private datosPortfolio :PortfolioWebService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataProyecto=data.proyectos;
    })
  }

}
