import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad, {
    attempt: 3,
    lazyComponent: true,
});

Vue.use({
    install: () => {
        // tslint:disable-next-line:no-unsafe-any
        Vue.prototype.destroy = Vue.prototype.$destroy;
    },
});
