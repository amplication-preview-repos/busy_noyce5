import { Record as TRecord } from "../api/record/Record";

export const RECORD_TITLE_FIELD = "id";

export const RecordTitle = (record: TRecord): string => {
  return record.id?.toString() || String(record.id);
};
