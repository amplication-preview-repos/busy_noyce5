import { Transaction } from "../transaction/Transaction";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactions?: Array<Transaction>;
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
};
