

export interface GetProductos {
  productos: any[];
  total: number;
  loading: boolean;
  errors: ReadonlyArray<any>;
}

export interface GetProducto {
  producto: any;
  loading: boolean;
  errors: ReadonlyArray<any>;
}

export interface InfoProducto {
  producto: any;
  productos?: any[];
  similares?: any[];
  relacionados?: any[];
  loading: boolean;
}
