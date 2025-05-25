export const commonErrors = [
    {
        type: 'Fetch Errors',
        searchParams: ['failed to fetch', 'fetch failed', 'getaddrinfo'],
        reply: "There seems to be a problem contacting the server. Please check your internet connection and try again."
    },
    {
        type: 'Timeout Errors',
        searchParams: ['timeout', 'timed out', 'ETIMEDOUT'],
        reply: "The request has timed out. Please try again later."
    },
    {
        type: 'Connection Errors',
        searchParams: ['connection refused', 'ECONNREFUSED'],
        reply: "Unable to connect to the server. Please ensure the server is running and reachable."
    },
    {
        type: 'DNS Errors',
        searchParams: ['ENOTFOUND', 'DNS lookup failed'],
        reply: "DNS lookup failed. Please check your network settings."
    },
    {
        type: 'SSL Errors',
        searchParams: ['SSL certificate', 'certificate error', 'self-signed certificate'],
        reply: "SSL certificate error. Please check your SSL settings."
    },
    {
        type: 'Authentication Errors',
        searchParams: ['unauthorized', 'authentication failed', 'invalid credentials'],
        reply: "Authentication failed. Please check your credentials and try again."
    },
    {
        type: 'Permission Errors',
        searchParams: ['permission denied', 'EACCES'],
        reply: "Permission denied. Please check your access rights."
    },
    {
        type: 'Resource Errors',
        searchParams: ['resource not found', '404', 'not found'],
        reply: "The requested resource could not be found. Please check the URL and try again."
    },
    {
        type: 'Server Errors',
        searchParams: ['internal server error', '500', 'server error'],
        reply: "The server encountered an error. Please try again later."
    },
    {
        type: 'Rate Limit Errors',
        searchParams: ['rate limit exceeded', 'too many requests', '429'],
        reply: "Rate limit exceeded. Please wait before making more requests."
    },
    {
        type: 'Parsing Errors',
        searchParams: ['unexpected token', 'syntax error', 'parsing error'],
        reply: "There was an error parsing the response. Please check the response format."
    }
]

export function generateHumanMessage(errString: string): string {
    let msg = "Unknowon Error"
    if (typeof errString !== "string") {
        throw new Error("Please provide an error message as a string")
    }
    for (const currentError of commonErrors) {
        for (const param of currentError.searchParams) {
            if (errString.toLowerCase().includes(param)) {
                msg = currentError.reply
                break
            }
        }
        if (msg === currentError.reply) {
            break
        }

    }

    return msg
}