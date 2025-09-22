import type { PrismaConfig } from 'prisma'
import { join } from 'path'

export default {
	schema: join('./models'),
	migrations: {
		path: './migrations',
	},
} satisfies PrismaConfig
