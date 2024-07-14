/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TransactionService } from "../transaction.service";
import { TransactionCreateInput } from "./TransactionCreateInput";
import { Transaction } from "./Transaction";
import { TransactionFindManyArgs } from "./TransactionFindManyArgs";
import { TransactionWhereUniqueInput } from "./TransactionWhereUniqueInput";
import { TransactionUpdateInput } from "./TransactionUpdateInput";
import { ReceiptFindManyArgs } from "../../receipt/base/ReceiptFindManyArgs";
import { Receipt } from "../../receipt/base/Receipt";
import { ReceiptWhereUniqueInput } from "../../receipt/base/ReceiptWhereUniqueInput";

export class TransactionControllerBase {
  constructor(protected readonly service: TransactionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Transaction })
  async createTransaction(
    @common.Body() data: TransactionCreateInput
  ): Promise<Transaction> {
    return await this.service.createTransaction({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        date: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Transaction] })
  @ApiNestedQuery(TransactionFindManyArgs)
  async transactions(@common.Req() request: Request): Promise<Transaction[]> {
    const args = plainToClass(TransactionFindManyArgs, request.query);
    return this.service.transactions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        date: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async transaction(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    const result = await this.service.transaction({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        amount: true,
        date: true,

        customer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTransaction(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() data: TransactionUpdateInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.updateTransaction({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,
          date: true,

          customer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Transaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTransaction(
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Transaction | null> {
    try {
      return await this.service.deleteTransaction({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          amount: true,
          date: true,

          customer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/receipts")
  @ApiNestedQuery(ReceiptFindManyArgs)
  async findReceipts(
    @common.Req() request: Request,
    @common.Param() params: TransactionWhereUniqueInput
  ): Promise<Receipt[]> {
    const query = plainToClass(ReceiptFindManyArgs, request.query);
    const results = await this.service.findReceipts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        date: true,
        totalAmount: true,

        transaction: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/receipts")
  async connectReceipts(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: ReceiptWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receipts: {
        connect: body,
      },
    };
    await this.service.updateTransaction({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/receipts")
  async updateReceipts(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: ReceiptWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receipts: {
        set: body,
      },
    };
    await this.service.updateTransaction({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/receipts")
  async disconnectReceipts(
    @common.Param() params: TransactionWhereUniqueInput,
    @common.Body() body: ReceiptWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receipts: {
        disconnect: body,
      },
    };
    await this.service.updateTransaction({
      where: params,
      data,
      select: { id: true },
    });
  }
}
