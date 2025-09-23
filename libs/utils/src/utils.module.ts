import { Module } from '@nestjs/common'
import { UtilsService } from './utils.service'
import { SignService } from './sign/sign.service'

@Module({
	providers: [UtilsService, SignService],
	exports: [UtilsService, SignService],
})
export class UtilsModule {}
