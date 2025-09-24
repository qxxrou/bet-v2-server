import { NestFactory } from '@nestjs/core'
import { AdminModule } from './admin.module'
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { VersioningType } from '@nestjs/common'
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

	// const config = app.get(ConfigService)

	await app.listen(process.env.port ?? 6579)
}
bootstrap()
