import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReceiptService } from "./receipt.service";
import { ReceiptControllerBase } from "./base/receipt.controller.base";

@swagger.ApiTags("receipts")
@common.Controller("receipts")
export class ReceiptController extends ReceiptControllerBase {
  constructor(protected readonly service: ReceiptService) {
    super(service);
  }
}
