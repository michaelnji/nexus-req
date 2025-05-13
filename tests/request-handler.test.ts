import { describe, it, expect } from 'vitest';
import { sendServerResponse } from '../src/handler'; // Assuming the function to test is exported from this path
import type { ErrorCodes, StatusCodes } from '../src/types';

describe('Request Handler', () => {
    type returnType = {
        x: string
    }
    it('should return an error response', async () => {
        const response = sendServerResponse<ErrorCodes>(400, 'success');
        console.log(response)
        expect(response.status).toBe(400);
        expect(response.message).toBeDefined();
    });
    it('should return a success response', async () => {
        const response = sendServerResponse<StatusCodes, returnType>(200, 'success', { x: 'hello' });

        console.log(response)
        expect(response.status).toBe(200);
        expect(response.message).toBeDefined();
        expect(response.data?.x).toBe('hello');
    });


});
