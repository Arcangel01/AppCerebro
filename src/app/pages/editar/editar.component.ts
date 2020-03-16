import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../api/data.service';
import { Actividad } from '../../Modelo/actividad';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  actividad: Actividad = new Actividad();

  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getActId(+id)
    .subscribe( data => {
      this.actividad = data;
    });
  }

  Actualizar(actividad: Actividad) {
    this.service.putActividad(actividad)
    .subscribe( data => {
        this.actividad = data;
        alert("Se modifico");
        this.router.navigate(["listado"]);
    });
  }

}
