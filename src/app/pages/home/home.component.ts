import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Actividad } from '../../Modelo/actividad';
import { DataService } from 'src/app/api/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup;

  actividad: Actividad = new Actividad();

  

  constructor(public service: DataService, private builder: FormBuilder, private router: Router) {
    this.formulario = this.builder.group({
      hora_inicio: [''],
      hora_fin: [''],
      t_invertido: [''],
      descripcion: [''],
      fecha: new Date().toLocaleDateString(),
      nombres: ['']
    });
   }

  ngOnInit() {
  }

    // Registrar
    register(value) {
      console.log(value);
      this.actividad = this.formulario.value;
      console.log(this.actividad);
      this.service.postActividad(this.actividad)
      .subscribe(x => {
        console.log('se guarda');
        // this.toast.success('Vehiculo registrado', 'Chispitas Car');
        this.actividad = new Actividad();
        console.log(this.actividad);
      },
      err => {
        this.formulario.reset();
        alert("Se registro la actividad");
        this.router.navigate(["listado"]);
      });
    }
}
