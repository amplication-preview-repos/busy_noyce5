import { Decimal } from "decimal.js";
import { Transaction } from "../transaction/Transaction";

export type Receipt = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  totalAmount: Decimal | null;
  transaction?: Transaction | null;
};
