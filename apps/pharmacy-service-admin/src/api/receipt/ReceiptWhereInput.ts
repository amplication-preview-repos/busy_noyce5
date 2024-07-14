import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type ReceiptWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  totalAmount?: DecimalNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};
