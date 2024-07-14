import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReceiptCreateNestedManyWithoutTransactionsInput } from "./ReceiptCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  amount?: number | null;
  date?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  receipts?: ReceiptCreateNestedManyWithoutTransactionsInput;
};
