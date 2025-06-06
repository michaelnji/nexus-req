import { describe, it, expect } from 'vitest';
import { sendServerResponse } from '../src/handler';
import type { ErrorCodes, StatusCodes } from '../src/types';
import { generateHumanMessage } from '../src/gen';
import { successCodes } from '../src/utils/defaults';

describe('Request Handler', () => {
    type returnType = {
        x: string
    }
    it('should return an error response', async () => {
        const response = sendServerResponse<ErrorCodes>(400, generateHumanMessage('This user is unauthorized to access this information.'));
        expect(response.status).toBe(400);
        expect(response.message).toBeDefined();
    });
    it('should return a success response', async () => {
        const response = sendServerResponse<StatusCodes, returnType>(200, 'success', { x: 'hello' });

        expect(response.status).toBe(200);
        expect(response.message).toBeDefined();
        expect(response.data?.x).toBe('hello');
        expect(response.ok).toBeTruthy()
        expect(successCodes.find((x) => x === response.status) !== undefined).toBe(true);
    });

    it('should throw an error from wrong status code', async () => {
        expect(() => sendServerResponse(700 as ErrorCodes, 'success')).toThrowError(new Error('incorrect value for status'))
        expect(() => sendServerResponse(700 as StatusCodes, 'success', {})).toThrowError(new Error('incorrect value for status'))
    });


});
