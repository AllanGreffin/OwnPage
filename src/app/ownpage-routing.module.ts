import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'curriculo', component: CurriculoComponent },
    { path: 'forms', component: FormularioComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }