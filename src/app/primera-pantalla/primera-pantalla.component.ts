import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-primera-pantalla',
  templateUrl: './primera-pantalla.component.html',
  styleUrls: ['./primera-pantalla.component.scss']
})
export class PrimeraPantallaComponent implements OnInit {

  constructor(public notificacionService: NotificacionesService) { }

  ngOnInit(): void {
  }

  crearNotificacion(){
  this.notificacionService.crearNotificacion({
    tipoNotificacion: "exitoso",
    titulo: "Login exitoso",
    mensaje: "El usuario se autenticó correctamente",
    fecha: new Date()
    })
  }

}
