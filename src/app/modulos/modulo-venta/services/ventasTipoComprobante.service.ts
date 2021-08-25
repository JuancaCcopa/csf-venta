import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IResultBusquedaVenta, IVentaCabeceraSingle, IHospitalDatos, IHospitalExclusiones, IHospital, IConvenios, INewVentaCabecera, ITipoCambio, IVentaCabeceraAnular } from '../interface/venta.interface';
import { UserContextService } from '../../../services/user-context.service';
import { VariablesGlobales } from '../../../interface/variables-globales';
import { PlanesModel } from '../models/planes.model';
import { IMedico } from '../../modulo-compartido/Ventas/interfaces/medico.interface';
import { UtilService } from '../../../services/util.service';
import { IResultBusquedaComprobante } from '../interface/comprobante.interface';
import { IResultBusquedaPedido } from '../interface/pedido.interface';
import { IVentaConfiguracion, IVentaConfiguracionRegistrar, IVentaConfiguracionModificar, IVentaConfiguracionEliminar } from '../interface/venta-configuracion.interface';
import { ISeriePorMaquina, ISeriePorMaquinaEliminar, ISerie, ISerieRegistrar, ISeriePorMaquinaRegistrar, ISeriePorMaquinaModificar } from '../interface/serie-por-maquina.interface';
import { ITabla } from '../interface/tabla.interface';
import { IProducto } from '../../modulo-compartido/Ventas/interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class VentasTipoComprobanteService {

  constructor(private http: HttpClient,
              private userContextService: UserContextService,
              private utils: UtilService) { }

  // Ventas

  getTipoComprobante() {
    return this.http.get<IResultBusquedaVenta[]>
    (`${environment.url_api_venta}TipoComprobante/GetListVentasTipoComprobantes/`);
  }


}
