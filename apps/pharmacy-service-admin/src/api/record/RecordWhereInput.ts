import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type RecordWhereInput = {
  id?: StringFilter;
  details?: StringNullableFilter;
  date?: DateTimeNullableFilter;
};
