import { Module, ValidationPipe } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { resolve } from 'node:path'
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { UserModule } from './user/user.module'
import { ReplyInterceptor } from './interceptor/reply/reply.interceptor'
import { DbModule } from './db/db.module'
import { GameModule } from './game/game.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: true,
			envFilePath: resolve(__dirname, 'admin', '.env'),
		}),
		UserModule,
		DbModule,
		GameModule,
	],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: ReplyInterceptor,
		},
		{
			provide: APP_PIPE,
			useFactory() {
				return new ValidationPipe({
					transform: true,
					disableErrorMessages: false,
					stopAtFirstError: true,
				})
			},
		},
	],
})
export class AdminModule {}
