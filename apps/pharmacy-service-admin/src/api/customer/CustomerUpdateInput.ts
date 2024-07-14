import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  transactions?: TransactionUpdateManyWithoutCustomersInput;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
};
