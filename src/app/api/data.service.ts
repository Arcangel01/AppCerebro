import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../Modelo/actividad';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:8080/v1/";

  // Metodo para listar toda la informacion
  getObtener() {
    return this.http.get<Actividad[]>(this.URL + 'obtener')
    .pipe(tap(x => {
      console.log(x);
    }));
  }

  // Metodo para guardar
  postActividad(actividad: Actividad) {
    return this.http.post<Actividad>(this.URL + 'actividad', actividad)
    .pipe(tap(res => {
      console.log('registro');
     // this.toast.success('Vehiculo registrado', 'Chispitas Car');
    },
    err => {
    }));
  }

  // Traer por id
  getActId(id: number) {
    return this.http.get<Actividad>(this.URL + 'obtener/' + id);
  }

  // Metodo para actualizar
  putActividad(actividad: Actividad) {
    return this.http.put<Actividad>(this.URL + 'edit/' + actividad.id, actividad);
  }
}
