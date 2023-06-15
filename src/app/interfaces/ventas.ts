import { Venta } from 'src/generated';
import { GraphQLError } from 'graphql';

export interface GetVentas {
  ventas: Venta[];
  loading: boolean;
  errors: ReadonlyArray<GraphQLError>;
}
                                            