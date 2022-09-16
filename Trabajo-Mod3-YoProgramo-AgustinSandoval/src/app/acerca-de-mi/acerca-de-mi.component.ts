import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../cargar-scripts.service";

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService) {
    _CargaScripts.carga(["scroll/scroll"]);
   }

  ngOnInit(): void {
  }

}
