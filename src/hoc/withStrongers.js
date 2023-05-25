import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_STRONGERS = gql`
  query searchStronger {
    pokemonsStronger(page: 1, limit: 70) {
      data {
        name
        image
        pokedexNumber
      }
    }
  }
`

export const withStrongers = graphql(GET_STRONGERS);
