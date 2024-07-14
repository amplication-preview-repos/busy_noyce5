import { Decimal } from "decimal.js";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type ReceiptUpdateInput = {
  date?: Date | null;
  totalAmount?: Decimal | null;
  transaction?: TransactionWhereUniqueInput | null;
};
