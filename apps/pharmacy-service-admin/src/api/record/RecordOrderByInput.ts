import { SortOrder } from "../../util/SortOrder";

export type RecordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  details?: SortOrder;
  date?: SortOrder;
};
