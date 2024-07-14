import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReceiptUpdateManyWithoutTransactionsInput } from "./ReceiptUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  receipts?: ReceiptUpdateManyWithoutTransactionsInput;
};
