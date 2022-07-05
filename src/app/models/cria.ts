export class Cria{
    constructor(
        public id_cria: number,
        public nombre: string,
        public descripcion: string,
        public fecha: any,
        public id_proveedor: number,
        public peso: number,
        public costo: number,
        public colorMusculo: number,
        public marmoleo: number,
        public id_sensor: any,
        public id_corral: number,
        public id_status: number,
        //extras
        public nombreProveedor:string,
        public clasificacion:string
    ){}
}