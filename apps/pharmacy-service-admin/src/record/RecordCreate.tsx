import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const RecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
