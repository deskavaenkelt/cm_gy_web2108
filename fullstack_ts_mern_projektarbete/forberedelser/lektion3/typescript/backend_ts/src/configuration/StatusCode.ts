// 1xx Info

// 2xx Success
const OK = 200
const CREATED = 201

// 3xx redirect

// 4xx client error
const BAD_REQUEST = 400
const UNAUTHENTICATED = 401
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405

// 5xx server error
const INTERNAL_SERVER_ERROR = 500

export default {
	OK,
	CREATED,
	BAD_REQUEST,
	UNAUTHENTICATED,
	FORBIDDEN,
	NOT_FOUND,
	METHOD_NOT_ALLOWED,
	INTERNAL_SERVER_ERROR
}
