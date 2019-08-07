import '@mdi/font/css/materialdesignicons.min.css';
import './assets/styles/stylus/main.styl';
import './plugins/vue/vuetify.ts';

export default previewComponent => ({
    render (createElement) {
        return createElement(
            'v-app',
            {
                props: {
                    id: 'v-app',
                    class: 'application',
                },
            },
            [
                createElement(
                    'div',
                    {
                        props: {
                            class: 'application--wrap',
                        },
                    },
                    [
                        createElement(
                            Object.assign(previewComponent),
                        ),
                    ],
                ),
            ],
        );
    },
});
