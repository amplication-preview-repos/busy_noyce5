import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  category?: SortOrder;
  price?: SortOrder;
  stock?: SortOrder;
};
