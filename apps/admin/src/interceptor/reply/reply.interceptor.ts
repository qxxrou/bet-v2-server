import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common'
import { map, Observable } from 'rxjs'

@Injectable()
export class ReplyInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<ReplyType> {
		return next.handle().pipe<ReplyType>(
			map(data => {
				let status = 1
				let content = data

				if (!data.content) {
					status = 2
				}

				return {
					error: data.error || '',
					status: status,
					message: data.message || '',
					content: content,
				}
			}),
		)
	}
}
