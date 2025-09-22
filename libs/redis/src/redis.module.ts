import { Module } from '@nestjs/common'
import { RedisService } from './redis.service'
import { REDIS_CLIENT } from '#constants'

@Module({
	providers: [
		{
			provide: REDIS_CLIENT,
			useClass: RedisService,
		},
	],
	exports: [REDIS_CLIENT],
})
export class RedisModule {}
