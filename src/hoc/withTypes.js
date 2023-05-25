import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_TYPES = gql`
  query getTypes {
    pokemonsTypesCatalog {
      id,
      name
    }
  }
`

export const withTypes = graphql(GET_TYPES);
