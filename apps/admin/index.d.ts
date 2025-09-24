interface ReplyType<T = any> {
	status: number
	error?: string
	message?: string | string[]
	content: T
}
