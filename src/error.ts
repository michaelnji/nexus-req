import type { ErrorCodes, NexusError } from "./types";

/**
 * Represents an error response from the server with additional context.
 * This class is used to encapsulate error details such as error code, message, path, and fatality.
 */
export class ServerResponseError implements NexusError {
    code: ErrorCodes;
    message: string;
    fatal?: boolean = false
    path: string;
    name: string;
    stack?: string | undefined;
    cause?: unknown;

    /**
     * Creates a new ServerResponseError with the provided message, error code, path, and optional fatal flag.
     * If the message is empty, it defaults to 'unknown error'.
     *
     * Args:
     *   message: The error message describing the error.
     *   code: The error code associated with this error.
     *   path: The path or context where the error occurred.
     *   fatal: Optional boolean indicating if the error is fatal. Defaults to false.
     */
    constructor(message: string, code: ErrorCodes, path: string, fatal?: boolean) {
        this.message = message.length < 1 ? 'unknown error' : message
        this.name = this.constructor.name;
        this.code = code;
        this.fatal = fatal ?? false
        this.path = path;
    }
}
