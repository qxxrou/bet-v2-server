import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DatabasesService
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

	async onModuleDestroy() {
		await this.$disconnect()
	}

	constructor() {
		super()
	}
}
