import { SortOrder } from "../../util/SortOrder";

export type ReceiptOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  totalAmount?: SortOrder;
  transactionId?: SortOrder;
};
