import { NgModule } from '@angular/core';
/* import {FormsModule} from '@angular/forms'; */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InterceptorProvider } from './service/interceptor-service';
import { NexExperienciaComponent } from './experiencia/nex-experiencia.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
import { EditSkillComponent } from './hard-soft-skills/edit-skill.component';
import { NewSkillComponent } from './hard-soft-skills/new-skill.component';
import { EditAcercadeComponent } from './acerca-de-mi/edit-acercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';





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
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PortfolioComponent,
    NexExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercadeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    
    
  ],
  providers: [
    CargarScriptsService,
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
