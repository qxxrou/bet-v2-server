import { NestFactory } from '@nestjs/core'
import { AdminModule } from './admin.module'
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AdminModule,
		new FastifyAdapter(),
	)

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: 'v1',
		prefix: false,
	})

	// console.log(process.env)

	const config = app.get(ConfigService)
	console.log(config.get('PORT'))

	await app.listen(process.env.port ?? 6579)
}
bootstrap()
