import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/api/data.service';
import { Actividad } from '../../Modelo/actividad';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lista:any;

  actividad: Actividad;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.service.getObtener()
    .subscribe((x: any) => {
      this.lista = x;
    },
    err => {
      console.log(err);
    });
  }

  Editar(actividad: Actividad) {
    localStorage.setItem("id", actividad.id.toString());
    this.router.navigate(["editar"]);
  }

}
