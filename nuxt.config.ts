/* tslint:disable: max-file-line-count */
export default {
    server: {
        port: 3000,
        host: '0.0.0.0',
        inline: false,
    },
    mode: 'universal',
    head: {
        titleTemplate: 'Nuxt',
        meta: [
            { charset: 'utf-8' },
            {
                content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1 minimum-scale=1.0',
                name: 'viewport',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: [
        { src: '~/assets/styles/main.scss', lang: 'scss' },
    ],
    vuetify: {
        treeShaking: true,
        customVariables: ['~/assets/styles/vuetify/variables.scss'],
        defaultAssets: {
            font: false,
            icons: 'mdi'
        },
        treeShake: true,
    },
    devModules: [
        ['@nuxtjs/vuetify'],
    ],
    modules: [
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        ['vue-scrollto/nuxt', { duration: 300 }],
        '@nuxtjs/sentry',
    ],
    plugins: [
        { ssr: true, src: '~/plugins/vue/vueMansonary.ts' },
        { ssr: false, src: '~/plugins/vue/browserChecker.ts' },
        { ssr: false, src: '~/plugins/vue/intersectionObserver.ts' },
        { ssr: false, src: '~/plugins/vue/veeValidate.ts' },
        { ssr: false, src: '~/plugins/vue/vueAwesomeSwiper.ts' },
        { ssr: false, src: '~/plugins/vue/vueLazyLoad.ts' },
    ],
    router: {
        extendRoutes (routes, resolve): void {
        
            routes.push(
                {
                    name: 'homepage',
                    path: '/',
                    component: resolve(__dirname, 'pages/home.vue'),
                },
            );
        },
    },
    build: {
        quiet: false, // https://github.com/nuxt/nuxt.js/issues/5623#issuecomment-511733772
        extractCSS: true,
        optimization: {
            splitChunks: {
              chunks: 'async',
              minSize: 30000,
              maxSize: 0,
              minChunks: 1,
              maxAsyncRequests: 5,
              maxInitialRequests: 3,
              automaticNameDelimiter: '~',
              automaticNameMaxLength: 30,
              name: true,
              cacheGroups: {
                vendors: {
                  test: /[\\/]node_modules[\\/]/,
                  priority: -10
                },
                default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true
                }
              }
            }
        },
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true,
            component: true,
        },
        extend (config, { isDev }): void {
                       config.node = {
                fs: 'empty',
            };

            // https://vue-svg-loader.netlify.com/faq.html#how-to-use-both-inline-and-external-svgs
            const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'));
            svgRule.test = /\.(png|jpe?g|gif|webp)$/;

            config.module.rules.push({
                test: /\.svg$/,
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        loader: 'vue-svg-loader',
                    },
                    {
                        loader: 'file-loader',
                        query: {
                            name: 'assets/[name].[hash:8].[ext]',
                        },
                    },
                ],
            });
        },
    },
    generate: {
        minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: false,
            decodeEntities: true,
            minifyCSS: true,
            minifyJS: true,
            processConditionalComments: true,
            removeAttributeQuotes: false,
            removeComments: false,
            removeEmptyAttributes: true,
            removeOptionalTags: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: false,
            removeStyleLinkTypeAttributes: false,
            removeTagWhitespace: false,
            sortAttributes: true,
            sortClassName: false,
            trimCustomFragments: true,
            useShortDoctype: true,
        },
    },
    styleResources: {
        scss: [
            '~/assets/styles/variables.scss',
            '~/assets/styles/mixins.scss',
        ],
    },
};
