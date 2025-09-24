import { Test, TestingModule } from '@nestjs/testing'
import { GoogleOTPService } from './GoogleOTP.service'

describe('GoogleotpService', () => {
	let service: GoogleOTPService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GoogleOTPService],
		}).compile()

		service = module.get<GoogleOTPService>(GoogleOTPService)
	})

	it('should be defined', () => {
		expect(service.verifyTotpCode('303745')).toBe(true)
	})
})
