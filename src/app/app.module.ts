import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './ownpage-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    CurriculoComponent,
    SobreComponent,
    HomeComponent,
    PagenotfoundComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
