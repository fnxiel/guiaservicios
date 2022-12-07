import { Injectable } from '@angular/core';
import { INotificaciones } from './INotificaciones';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  notificaciones: INotificaciones[] = []

  constructor() { }

  crearNotificacion(nuevaNotificacion: INotificaciones){
    this.notificaciones.push(nuevaNotificacion)
    console.log(this.notificaciones)
  }

  limpiarNotificaciones(){
    this.notificaciones = []
    console.log(this.notificaciones)
  }

}
