import {
	IsAlphanumeric,
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Length,
} from 'class-validator'

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	provision: string

	@IsAlphanumeric('en-US')
	@Length(4, 16)
	@IsNotEmpty()
	username: string

	@IsAlphanumeric('en-US')
	@Length(8, 24)
	@IsNotEmpty()
	password: string

	@IsOptional()
	@IsEmail(
		{},
		{
			message: '请输入正确的邮箱账号',
		},
	)
	email?: string

	@IsOptional()
	@IsString()
	role: string = 'guest'
}
