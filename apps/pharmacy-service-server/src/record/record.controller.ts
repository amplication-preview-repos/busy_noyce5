import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecordService } from "./record.service";
import { RecordControllerBase } from "./base/record.controller.base";

@swagger.ApiTags("records")
@common.Controller("records")
export class RecordController extends RecordControllerBase {
  constructor(protected readonly service: RecordService) {
    super(service);
  }
}
