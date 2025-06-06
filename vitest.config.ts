import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        coverage: {
            enabled: true,
            reporter: ['lcov', 'html'],
            provider: "istanbul", // or 'v8',
            exclude: ['tests/**', 'dist/**'],
            include: ['src/**/**']
        },
    },
})