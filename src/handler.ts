import type { ErrorCodes, ServerResponse, StatusCodes } from "./types";
import { errorCodes, successCodes } from "./utils/defaults";


/**
 * Sends a server response based on the provided status code, message, and optional data.
 * 
 * @param status - The HTTP status code for the response. It can be either a success or error code.
 * @param message - A descriptive message about the response.
 * @param data - Optional data to include in the response. This is only included if the status code is a success code.
 * 
 * @returns A ServerResponse object containing the status, message, ok flag, and optional data.
 * 
 * @throws Will throw an error if the status code is not recognized as a valid success or error code.
 */
export function sendServerResponse<S extends ErrorCodes>(
    status: S,
    message: string
): ServerResponse<S, unknown>;

/**
 * Sends a server response based on the provided status code, message, and data.
 * 
 * @param status - The HTTP status code for the response. It must be a success code.
 * @param message - A descriptive message about the response.
 * @param data - Data to include in the response.
 * 
 * @returns A ServerResponse object containing the status, message, ok flag, and data.
 * 
 * @throws Will throw an error if the status code is not recognized as a valid success code.
 */
export function sendServerResponse<S extends StatusCodes, D>(
    status: S,
    message: string,
    data: D
): ServerResponse<S, D>;

/**
 * Sends a server response based on the provided status code, message, and optional data.
 * 
 * @param status - The HTTP status code for the response. It can be either a success or error code.
 * @param message - A descriptive message about the response.
 * @param data - Optional data to include in the response. This is only included if the status code is a success code.
 * 
 * @returns A ServerResponse object containing the status, message, ok flag, and optional data.
 * 
 * @throws Will throw an error if the status code is not recognized as a valid success or error code.
 */
export function sendServerResponse(
    status: StatusCodes | ErrorCodes,
    message: string,
    data: unknown = null
): ServerResponse<StatusCodes | ErrorCodes, unknown> {
    if (successCodes.find((x) => x === status) === undefined && errorCodes.find((x) => x === status) === undefined) {
        throw new Error('incorrect value for status')
    }
    const isSuccess = successCodes.find((x) => x === status) !== undefined

    return {
        status,
        message,
        ok: isSuccess,
        data: isSuccess ? data : null
    };
}
