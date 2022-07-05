export class Empleado{
    constructor(
        public id_empleado: number,
        public nombre: string,
        public apaterno: string,
        public amaterno: string,
        public email: string,
        public contrasena: string,
        public id_rol: number
        
    ){}
}