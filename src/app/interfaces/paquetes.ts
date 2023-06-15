import { Producto } from 'src/generated';
import { GraphQLError } from 'graphql';

export interface GetPaquetes {
  paquetes: Producto[];
  total: number;
  loading: boolean;
  errors: ReadonlyArray<GraphQLError>;
}

export interface GetPaquete {
  paquete: Producto;
  loading: boolean;
  errors: ReadonlyArray<GraphQLError>;
}

export interface InfoPaquete {
  paquete: Producto;
  paquetes?: Producto[];
  similares?: Producto[];
  relacionados?: Producto[];
  loading: boolean;
}
