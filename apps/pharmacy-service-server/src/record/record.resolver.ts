import * as graphql from "@nestjs/graphql";
import { RecordResolverBase } from "./base/record.resolver.base";
import { Record } from "./base/Record";
import { RecordService } from "./record.service";

@graphql.Resolver(() => Record)
export class RecordResolver extends RecordResolverBase {
  constructor(protected readonly service: RecordService) {
    super(service);
  }
}
