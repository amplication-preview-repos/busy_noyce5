import { Customer } from "../customer/Customer";
import { Receipt } from "../receipt/Receipt";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  date: Date | null;
  customer?: Customer | null;
  receipts?: Array<Receipt>;
};
