import { RecordWhereInput } from "./RecordWhereInput";
import { RecordOrderByInput } from "./RecordOrderByInput";

export type RecordFindManyArgs = {
  where?: RecordWhereInput;
  orderBy?: Array<RecordOrderByInput>;
  skip?: number;
  take?: number;
};
