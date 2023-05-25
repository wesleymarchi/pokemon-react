import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_LEGENDS = gql`
  query searchLegendary {
    pokemonsLegendary(page: 1, limit: 70) {
      data {
        name
        image
        pokedexNumber
      }
    }
  }
`

export const withLegends = graphql(GET_LEGENDS);
