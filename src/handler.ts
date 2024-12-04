import { ServerResponse } from "./types";
import type { ErrorCodes, StatusCode } from "./types";

/**
 * Creates a standardized server response object
 * @param status - HTTP status code or error code
 * @param message - Response message
 * @param data - Optional payload for successful responses
 * @returns Typed server response object
 */
export function sendServerResponse<S extends ErrorCodes, M extends string>(status: S, message: M): ServerResponse<S,M>


export function sendServerResponse<S extends 200, M extends string, D>(status: S, message: M, data: D,): ServerResponse<S, D>


export function sendServerResponse(status: StatusCode | ErrorCodes, message?: string, data?: unknown,) {

    if (status === 200) {
        const res = {
            status,
            data,
            message,
            ok: true

        }

        return res
    }

    const res = {
        status,
        message,
        ok: false

    }

    return res

}
