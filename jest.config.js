module.exports = {
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'vue',
    ],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js': 'ts-jest',
        '.+\\.(css|styl|svg?inline|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '.+\\.svg?.+$': 'jest-transform-stub',
        '^~/(.*)$': '<rootDir>/$1',
    },
    snapshotSerializers: [
        'jest-serializer-vue',
    ],
    testMatch: [
        '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.spec.(js|jsx|ts|tsx))',
    ],
    collectCoverage: true,
    coverageDirectory: './coverage',
    collectCoverageFrom: [
        '**/*.{js,ts,vue}',
        '!**/static/sw.js',
        '!**/plugins/vue/**',
        '!**/cypress/**',
        '!**/coverage/**',
        '!**/pages/index.vue',
        '!**/{*.config.js,index.d.ts,styleguide.root.js,nuxt.config.ts}',
        '!**/node_modules/**',
        '!**/styleguide/**',
        '!**/src/combobox-list-height-fixer/**',
        '!**/plugins/nuxt/init.ts',
        '!**/src/blog/domain/blogPostCategory.ts',
        '!**/plugins/nuxt/apolloConfig.ts',
    ],
    coverageReporters: [
        'json',
        'html',
    ],
    globals: {
        'vue-jest': {
            babelConfig: {
                presets: [
                    [
                        'env',
                        {
                            useBuiltIns: 'entry',
                            shippedProposals: true,
                        },
                    ],
                ],
            },
        },
    },
};
