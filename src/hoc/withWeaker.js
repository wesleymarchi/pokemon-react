import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_WEAKER = gql`
  query searchWeaker {
    pokemonsWeaker(page: 1, limit: 70) {
      data {
        name
        image
        pokedexNumber
      }
    }
  }
`

export const withWeaker = graphql(GET_WEAKER);
