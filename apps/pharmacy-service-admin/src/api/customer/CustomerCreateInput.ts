import { TransactionCreateNestedManyWithoutCustomersInput } from "./TransactionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  transactions?: TransactionCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
};
