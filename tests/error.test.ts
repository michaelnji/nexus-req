import { describe, it, expect } from 'vitest';
import { ServerResponseError } from '../src/error.ts'
import type { NexusError, ErrorCodes } from '../src/types/index.ts';


// Helper to check if stack trace is present and correct
function stackTraceIncludesClassName(stack: string | undefined, className: string): boolean {
    return typeof stack === 'string' && stack.includes(className);
}

describe('ServerResponseError', () => {
    it('should create an instance with all properties set (happy path)', () => {

        // Act
        const err = new ServerResponseError('Something went wrong', 500, '/api/data', true);

        // Assert
        expect(err).toBeInstanceOf(ServerResponseError);
        expect(err.message).toBe('Something went wrong');
        expect(err.code).toBe(500);
        expect(err.fatal).toBe(true);
        expect(err.path).toBe('/api/data');
        expect(err.name).toBe('ServerResponseError');
        // expect(typeof err.stack).toBe('string');
        // expect(stackTraceIncludesClassName(err.stack, 'ServerResponseError')).toBe(true);
        expect(err.cause).toBeUndefined();
    });

    it('should set fatal to false by default', () => {

        // Act
        const err = new ServerResponseError('Not found', 404, '/api/404');

        // Assert
        expect(err.fatal).toBe(false);

    });
    it('should handle empty message and path', () => {

        // Act
        const err = new ServerResponseError('', 404, '');

        // Assert
        expect(err.message).toBe('unknown error');
        expect(err.path).toBe('');
    });


    it('should not set cause unless explicitly assigned', () => {

        // Act
        const err = new ServerResponseError('No cause', 500, '/no-cause');

        // Assert
        expect(err.cause).toBeUndefined();
    });

    it('should allow cause to be set after construction', () => {

        // Arrange
        const err = new ServerResponseError('With cause', 400, '/with-cause');

        // Act
        err.cause = new Error('Root cause');

        // Assert
        expect(err.cause).toBeInstanceOf(Error);
        expect((err.cause as Error).message).toBe('Root cause');
    });


})
