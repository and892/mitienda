export interface IEmpresa {
  id?: number;
  nombre?: string;
  direccion?: string;
  titulo?: string;
  rut?: string;
  telefono?: number;
}

export class Empresa implements IEmpresa {
  constructor(
    public id?: number,
    public nombre?: string,
    public direccion?: string,
    public titulo?: string,
    public rut?: string,
    public telefono?: number
  ) {}
}
