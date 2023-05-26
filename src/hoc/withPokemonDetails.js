/* eslint-disable camelcase */
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_POKEMON_DETAILS = gql`
  query searchPokemons($pokedexNumber: Int) {
    pokemonsSearch(pokedexNumber: $pokedexNumber) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          name
          image
          attack
          spAttack
          defense
          spDefense
          type1 {
            name
            color
          }
          type2 {
            name
            color
          }
          generation
          pokedexNumber
          abilities
          hp
          experienceGrowth
          description,
          legendaryPercentage
        }
        cursor
      }
    }
  }
`

export const withPokemonDetails = graphql(GET_POKEMON_DETAILS, {
    options: ({ pokedexNumber }) => ({
        variables: { pokedexNumber }
    })
})
