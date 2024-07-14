import { Receipt as TReceipt } from "../api/receipt/Receipt";

export const RECEIPT_TITLE_FIELD = "id";

export const ReceiptTitle = (record: TReceipt): string => {
  return record.id?.toString() || String(record.id);
};
