import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReceiptListRelationFilter } from "../receipt/ReceiptListRelationFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  receipts?: ReceiptListRelationFilter;
};
