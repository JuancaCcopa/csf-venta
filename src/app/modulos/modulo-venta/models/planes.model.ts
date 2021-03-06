export class PlanesModel {
    idPlan?: number;
    codPlan?: string;
    nombre: string;
    porcentajeDescuento?: number;
    flgEstado?: boolean;
    regIdUsuario?: number;
    regEstacion?: string;

    constructor() {
        this.idPlan = 0; 
        this.codPlan = '';
        this.nombre = '';
        this.porcentajeDescuento = 0;
        this.flgEstado = false;
        this.regIdUsuario = 0;
        this.regEstacion = '';
    }
}