import { InMemoryCache } from 'apollo-cache-inmemory';

export default (context) => {
    return {
        httpEndpoint: context.app.$env.SITES_API_URL,
        apollo: {
            defaultOptions: {
                query: {
                    // https://www.apollographql.com/docs/react/api/react-apollo/#optionsfetchpolicy
                    fetchPolicy: 'cache-first',
                },
            },
        },
        cache: new InMemoryCache({
            addTypename: false,
        }),
    };
};
