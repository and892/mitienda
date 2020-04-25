export interface IProducto {
  id?: number;
  nombre?: string;
  codigo?: string;
  cantida?: number;
}

export class Producto implements IProducto {
  constructor(public id?: number, public nombre?: string, public codigo?: string, public cantida?: number) {}
}
