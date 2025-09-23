import { Test, TestingModule } from '@nestjs/testing'
import { UtilsService } from './utils.service'
import { SignService } from './sign/sign.service'

describe('UtilsService', () => {
	let service: UtilsService
	let signService: SignService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UtilsService, SignService],
		}).compile()

		service = module.get<UtilsService>(UtilsService)
		signService = module.get<SignService>(SignService)

		console.log(
			signService.requestFirstTimeSign(
				1758572225,
				'pYWVXMuHy3XE5U3qaxjCmY',
				'productlist',
				'Y301',
			),
		)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
