import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceiptServiceBase } from "./base/receipt.service.base";

@Injectable()
export class ReceiptService extends ReceiptServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
