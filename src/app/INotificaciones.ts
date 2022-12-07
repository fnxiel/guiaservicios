export interface INotificaciones{
    mensaje: string
    titulo: string
    tipoNotificacion: "advertencia" | "error" | "exitoso",
    fecha: Date
}