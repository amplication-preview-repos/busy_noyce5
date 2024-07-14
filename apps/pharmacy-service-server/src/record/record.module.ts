import { Module } from "@nestjs/common";
import { RecordModuleBase } from "./base/record.module.base";
import { RecordService } from "./record.service";
import { RecordController } from "./record.controller";
import { RecordResolver } from "./record.resolver";

@Module({
  imports: [RecordModuleBase],
  controllers: [RecordController],
  providers: [RecordService, RecordResolver],
  exports: [RecordService],
})
export class RecordModule {}
