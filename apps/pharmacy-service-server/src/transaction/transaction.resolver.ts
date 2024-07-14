import * as graphql from "@nestjs/graphql";
import { TransactionResolverBase } from "./base/transaction.resolver.base";
import { Transaction } from "./base/Transaction";
import { TransactionService } from "./transaction.service";

@graphql.Resolver(() => Transaction)
export class TransactionResolver extends TransactionResolverBase {
  constructor(protected readonly service: TransactionService) {
    super(service);
  }
}
