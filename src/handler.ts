import type { ErrorCodes, ServerResponse, StatusCodes } from "./types";

/**
 * Sends a server response based on the provided status code, message, and optional data.
 *
 * @template S - The type of status code, which can be either an ErrorCode or a StatusCode.
 * @template D - The type of data to be included in the response, applicable for success responses.
 *
 * @param {S} status - The HTTP status code for the response.
 * @param {string} message - The message to be included in the response.
 * @param {D} [data] - Optional data to be included in the response, applicable for success responses.
 *
 * @returns {ServerResponse<S, D>} - The server response object containing status, message, ok flag, and optional data.
 */
export function sendServerResponse<S extends ErrorCodes>(status: S, message: string): ServerResponse<S, unknown>;

export function sendServerResponse<S extends StatusCodes, D>(status: S, message: string, data: D): ServerResponse<S, D>;

export function sendServerResponse(
    status: StatusCodes | ErrorCodes,
    message: string,
    data: unknown = null
): ServerResponse<StatusCodes | ErrorCodes, unknown> {
    const isSuccess = status === 200;
    return {
        status,
        message,
        ok: isSuccess,
        data: isSuccess ? data : null,
    };
}
