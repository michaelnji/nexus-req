import { describe, it, expect } from 'vitest';
import { sendServerResponse } from '../src/handler';
import type { ErrorCodes, StatusCodes } from '../src/types';
import { generateHumanMessage } from '../src/gen';

describe('Request Handler', () => {
    type returnType = {
        x: string
    }
    it('should return an error response', async () => {
        const response = sendServerResponse<ErrorCodes>(400, generateHumanMessage('This user is unauthorized to access this information.'));
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
