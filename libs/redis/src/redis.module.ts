import { Module } from '@nestjs/common'
import { RedisService } from './redis.service'
import { REDIS_CLIENT } from 'constant'

@Module({
	providers: [
		{
			provide: REDIS_CLIENT,
			useClass: RedisService,
		},
	],
	exports: [
		{
			provide: REDIS_CLIENT,
			useClass: RedisService,
		},
	],
})
export class RedisModule {}
