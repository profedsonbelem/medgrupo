import { SimuladoComponent } from './simulado/simulado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: 'simulado', pathMatch:'full'},
  {path: 'simulado', component: SimuladoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
