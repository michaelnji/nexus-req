// export const IsSuccess = Symbol('success-response')
export type StatusCodes = 100 | 101 | 102 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308;
export type ErrorCodes = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 510 | 511;
export interface ServerResponse<
    Status extends (StatusCodes | ErrorCodes),
    Data,
> {
    status: Status;
    message?: string;
    ok: Status extends StatusCodes ? true : false;
    data?: Status extends StatusCodes ? Data : null;
    // [IsSuccess]?: 'success-response'
}
export interface NexusError extends Error {
    code: ErrorCodes;
    message: string;
    fatal?: boolean
    path?: string
}



