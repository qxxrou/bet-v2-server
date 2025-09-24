import { Injectable } from '@nestjs/common'
import * as OTPAuth from 'otpauth'

@Injectable()
export class GoogleOTPService {
	private readonly TotpBase: {
		algorithm: 'SHA1'
		digits: 6
		period: 30
	}
	constructor() {}

	genSecret(issuer = 'ACME', label = 'Alice'): string {
		// @ts-ignore
		const totp = new OTPAuth.TOTP({
			issuer,
			label,
			secret: new OTPAuth.Secret(),
			...this.TotpBase,
		})
		return totp.secret.base32 as string
	}

	verifyTotpCode(code: string) {
		const totp = new OTPAuth.TOTP({ ...this.TotpBase })
		const isOk = totp.validate({
			token: code,
		})

		return isOk === 0
	}
}
