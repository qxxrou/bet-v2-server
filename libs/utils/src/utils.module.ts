import { Module } from '@nestjs/common'
import { UtilsService } from './utils.service'
import { SignService } from './sign/sign.service'
import { GoogleOTPService } from './GoogleOTP/GoogleOTP.service'

@Module({
	providers: [UtilsService, SignService, GoogleOTPService],
	exports: [UtilsService, SignService, GoogleOTPService],
})
export class UtilsModule {}
