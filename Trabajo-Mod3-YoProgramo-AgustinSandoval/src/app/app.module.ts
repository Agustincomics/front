import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Inicio servicio
import { CargarScriptsService } from "./cargar-scripts.service";
//FIN servicio

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardSoftSkillsComponent } from './hard-soft-skills/hard-soft-skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeMiComponent,
    NavbarComponent,
    BannerComponent,    
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
