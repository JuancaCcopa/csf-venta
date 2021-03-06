export interface IReceta {
    ide_receta: number;
    ide_historia: string;
    fec_registra: Date;
    cod_atencion: string;
    paciente: string;
    medico: string;
    est_estado: string;
    telefono: string;
    telefono2: string;
    est_consulta_medica: string;
    flg_atendido_online: boolean;
    key: string;
}

export interface IDetalleReceta {
    ide_receta: number;
    codproducto: string;
    nombreproducto: string;
    cantidad: number;
    num_frecuencia: string;
    num_dosis: string;
}