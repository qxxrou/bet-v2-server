import { Injectable } from '@nestjs/common'
import { createClient, RedisClientType } from 'redis'

@Injectable()
export class RedisService {
	redisClient: RedisClientType

	constructor() {
		const redisClient: RedisClientType = createClient({
			url: 'localhost:6379',
			name: '',
			password: '',
			database: 2,
		})

		this.redisClient = redisClient
	}
}
