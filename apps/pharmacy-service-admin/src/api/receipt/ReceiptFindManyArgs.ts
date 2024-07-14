import { ReceiptWhereInput } from "./ReceiptWhereInput";
import { ReceiptOrderByInput } from "./ReceiptOrderByInput";

export type ReceiptFindManyArgs = {
  where?: ReceiptWhereInput;
  orderBy?: Array<ReceiptOrderByInput>;
  skip?: number;
  take?: number;
};
