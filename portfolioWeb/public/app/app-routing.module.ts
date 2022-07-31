import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InisessionComponent } from './componentes/inisession/inisession.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'Inicio-Sesion',component:InisessionComponent},
  {path:'',redirectTo:'Inicio-Sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
