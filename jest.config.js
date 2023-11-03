module.exports = {
    projects :[
        {
            displayName: 'backend-tests',
            testEnvironment: 'node',
            transform: {
                '^.+\\.[t|j]sx?$': 'babel-jest'
            },
            testMatch: ['**/tests/**/*.test.js']
        },

        {
            displayName: 'frontend-tests',
            testEnvironment: 'jsdom',
            transform: {
                '^.+\\.[t|j]sx?$': 'babel-jest'
            },
            testMatch: ['**/bloglist-frontend/src/components/**/*.test.js']
        }
    ],
}
