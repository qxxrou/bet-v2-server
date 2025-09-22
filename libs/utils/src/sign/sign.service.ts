import { Injectable } from '@nestjs/common'
import { createHash } from 'node:crypto'

type RequestFirstMethods =
	| 'launchgame'
	| 'getwagers'
	| 'getwager'
	| 'gamelist'
	| 'gamehistory'
	| 'productlist'

type OperatorFirstMethods =
	| 'getbalance'
	| 'withdraw'
	| 'deposit'
	| 'pushbetdata'

@Injectable()
export class SignService {
	requestFirstTimeSign(
		requestTime: number,
		secretKey: string,
		method: RequestFirstMethods,
		operatorCode: string,
	) {
		const hash = createHash('md5')
		hash.update(String(requestTime), 'utf8')
		hash.update(secretKey, 'utf8')
		hash.update(method, 'utf8')
		hash.update(operatorCode, 'utf8')
		return hash.digest('hex')
	}

	operatorFirstSign(
		operatorCode: string,
		requestTime: number,
		method: OperatorFirstMethods,
		secretKey: string,
	) {
		const hash = createHash('md5')
		hash.update(operatorCode, 'utf8')
		hash.update(String(requestTime), 'utf8')
		hash.update(method, 'utf8')
		hash.update(secretKey, 'utf8')
		return hash.digest('hex')
	}
}
