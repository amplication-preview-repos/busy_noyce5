import { Module } from "@nestjs/common";
import { ReceiptModuleBase } from "./base/receipt.module.base";
import { ReceiptService } from "./receipt.service";
import { ReceiptController } from "./receipt.controller";
import { ReceiptResolver } from "./receipt.resolver";

@Module({
  imports: [ReceiptModuleBase],
  controllers: [ReceiptController],
  providers: [ReceiptService, ReceiptResolver],
  exports: [ReceiptService],
})
export class ReceiptModule {}
