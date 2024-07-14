import * as graphql from "@nestjs/graphql";
import { ReceiptResolverBase } from "./base/receipt.resolver.base";
import { Receipt } from "./base/Receipt";
import { ReceiptService } from "./receipt.service";

@graphql.Resolver(() => Receipt)
export class ReceiptResolver extends ReceiptResolverBase {
  constructor(protected readonly service: ReceiptService) {
    super(service);
  }
}
