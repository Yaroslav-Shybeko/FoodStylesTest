import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import { getToken } from '../../utils';

const httpLink = createHttpLink({
  uri: 'https://api-dev.foodstyles.com/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await getToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
