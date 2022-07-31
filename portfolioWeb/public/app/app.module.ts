import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { PortfolioWebService } from './servicios/portfolio-web.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsComponent } from './componentes/forms/forms.component';
import { InisessionComponent } from './componentes/inisession/inisession.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PersonaComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ProyectosComponent,
    FooterComponent,
    AptitudesComponent,
    FormsComponent,
    InisessionComponent,
    PortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
