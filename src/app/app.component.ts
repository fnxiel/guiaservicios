import { Component } from '@angular/core';
import {mensajes} from './mensajes';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guiaservicios';

  mensajes = mensajes

  constructor(public notificacionesService: NotificacionesService){}

  crearNotificacion(titulo: string, mensaje: string, tipoNotificacion: "advertencia" | "error" | "exitoso"){
    this.notificacionesService.crearNotificacion({
      titulo: titulo,
      mensaje: mensaje,
      tipoNotificacion: tipoNotificacion,
      fecha: new Date()
    })
  }

  limpiar(){
    this.notificacionesService.limpiarNotificaciones()
  }
}
