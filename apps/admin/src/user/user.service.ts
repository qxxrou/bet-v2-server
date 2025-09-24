import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { GoogleOTPService } from '@app/utils/GoogleOTP/GoogleOTP.service'

@Injectable()
export class UserService {
	constructor(private readonly OTP: GoogleOTPService) {}

	create(createUserDto: CreateUserDto) {
		return 'This action adds a new user'
	}
}
