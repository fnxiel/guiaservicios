import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-segunda-pantalla',
  templateUrl: './segunda-pantalla.component.html',
  styleUrls: ['./segunda-pantalla.component.scss']
})
export class SegundaPantallaComponent implements OnInit {

  constructor(public servicioNotificacion: NotificacionesService) { }

  ngOnInit(): void {
  }

  agregarAlCarrito(){
    
    console.log("Esto se esta loggeando desde el catalogo de compras.")

    this.servicioNotificacion.crearNotificacion({
      tipoNotificacion: 'advertencia',
      mensaje: "No hay suficiente en inventario para agregar al carrito",
      titulo: "Catálogo de compras",
      fecha: new Date()
    })
  }

}
