import { Controller, Post, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { GoogleOTPService } from '@app/utils/GoogleOTP/GoogleOTP.service'

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly OTP: GoogleOTPService,
	) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		console.log(this.OTP.genSecret('welcome', 'TOTP'))
		return this.userService.create(createUserDto)
	}
}
