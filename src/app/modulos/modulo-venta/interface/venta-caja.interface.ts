import { Observable } from 'rxjs';

export interface IResultBusquedaVenta {
    tipoComprobante: string;// variable
    codVenta: string;//comprobante
    monto: string;//cuadredecaja
    moneda: string;/* comprobante (D)olares, (S)oles */
    anombrede: string; //comprobante
    ruc: string;//comprobante
    direccion: string;//comprobante
    tipopago: string;//cuadredecaja
    nombreentidad: string;//cuadredecaja
    codterminal: string;//cuadredecaja
    operacion: string;// (G)enera, (P)aga, (T)odo  -> variable
    variostipopago: number;// (G)enera, (P)aga, (T)odo  -> variable
    codcomprobante: number;// variabel de salidad
   
}
