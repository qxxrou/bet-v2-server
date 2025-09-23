import { SignService } from './sign/sign.service'

const sign = new SignService()

const code = sign.requestFirstTimeSign(
	1758572225,
	'pYWVXMuHy3XE5U3qaxjCmY',
	'productlist',
	'Y301',
)

console.log(code)
