import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecordServiceBase } from "./base/record.service.base";

@Injectable()
export class RecordService extends RecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
