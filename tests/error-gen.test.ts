import { describe, it, expect } from "vitest";
import { generateHumanMessage, commonErrors } from "../src/gen"; // Assuming the function to
describe("Error message Generator", () => {
    it("should return an error reply for fetch errors", async () => {
        const reply = generateHumanMessage("FetchError: Failed to fetch");
        expect(reply).toBe(commonErrors.find(x => x.type === "Fetch Errors")?.reply);
    });
    it("should return an error reply for Authentication Errors", async () => {
        const reply = generateHumanMessage("This user is unauthorized to access this information.");
        expect(reply).toBe(commonErrors.find(x => x.type === "Authentication Errors")?.reply);
    });
    it("should return an error reply for Server Errors", async () => {
        const reply = generateHumanMessage("internal server error. Please try again later");
        expect(reply).toBe(commonErrors.find(x => x.type === "Server Errors")?.reply);
    });
});
