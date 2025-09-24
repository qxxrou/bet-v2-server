import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DbService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	async onModuleInit() {
		try {
			await this.$connect()
		} catch (error) {
			throw new Error(error)
		}
	}

	onModuleDestroy() {
		this.$disconnect()
	}
}
