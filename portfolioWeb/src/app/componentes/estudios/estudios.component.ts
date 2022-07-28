import { Component, OnInit } from '@angular/core';
import { PortfolioWebService } from 'src/app/servicios/portfolio-web.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  dataEstudio:any;
  constructor(private datosPortfolio :PortfolioWebService){}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.dataEstudio=data.estudio;
    })
  }

}