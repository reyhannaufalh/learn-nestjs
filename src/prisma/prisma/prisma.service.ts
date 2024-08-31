import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
    console.info('Create PrismaService');
  }

  onModuleInit() {
    console.info('Init PrismaService');
    this.$connect();
  }

  onModuleDestroy() {
    console.info('Destroy PrismaService');
    this.$disconnect();
  }
}
