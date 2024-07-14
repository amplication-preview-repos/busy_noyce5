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
import { ReceiptService } from "../receipt.service";
import { ReceiptCreateInput } from "./ReceiptCreateInput";
import { Receipt } from "./Receipt";
import { ReceiptFindManyArgs } from "./ReceiptFindManyArgs";
import { ReceiptWhereUniqueInput } from "./ReceiptWhereUniqueInput";
import { ReceiptUpdateInput } from "./ReceiptUpdateInput";

export class ReceiptControllerBase {
  constructor(protected readonly service: ReceiptService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Receipt })
  async createReceipt(
    @common.Body() data: ReceiptCreateInput
  ): Promise<Receipt> {
    return await this.service.createReceipt({
      data: {
        ...data,

        transaction: data.transaction
          ? {
              connect: data.transaction,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Receipt] })
  @ApiNestedQuery(ReceiptFindManyArgs)
  async receipts(@common.Req() request: Request): Promise<Receipt[]> {
    const args = plainToClass(ReceiptFindManyArgs, request.query);
    return this.service.receipts({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Receipt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async receipt(
    @common.Param() params: ReceiptWhereUniqueInput
  ): Promise<Receipt | null> {
    const result = await this.service.receipt({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Receipt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateReceipt(
    @common.Param() params: ReceiptWhereUniqueInput,
    @common.Body() data: ReceiptUpdateInput
  ): Promise<Receipt | null> {
    try {
      return await this.service.updateReceipt({
        where: params,
        data: {
          ...data,

          transaction: data.transaction
            ? {
                connect: data.transaction,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Receipt })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteReceipt(
    @common.Param() params: ReceiptWhereUniqueInput
  ): Promise<Receipt | null> {
    try {
      return await this.service.deleteReceipt({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
