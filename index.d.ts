import { Vue } from 'vue/types/vue';
import { Route } from 'vue-router';
import { Store } from 'vuex';
import { StoreRootState } from '~/src/store/types';
import { ApolloProvider } from 'vue-apollo';
import ApolloClient from 'apollo-client/ApolloClient';

declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
}

export interface GraphQLQueryTree {
    kind?: string;
    definitions?: [];
}

export interface ApolloProviderWithDefaultClient extends ApolloProvider {
    defaultClient: ApolloClient;
}

export interface AppWithApolloProvider extends Vue {
    apolloProvider: ApolloProviderWithDefaultClient;
}

export interface NuxtContext {
    app: AppWithApolloProvider;
    route: Route;
    store: Store<StoreRootState>;
    req: Request;
}

export interface Process {
    client: boolean;
    server: boolean;
    cwd (): string;
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $_veeValidate?: any;
        head?: any;
    }
}