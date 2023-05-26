/* eslint-disable camelcase */
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const SEARCH_POKEMONS = gql`
  query searchPokemons(
    $keyword: String,
    $attack_Gt: Int,
    $attack_Lt: Int,
    $experienceGrowth_Gt: Int,
    $experienceGrowth_Lt: Int,
    $type1_Name: String,
    $pokedexNumber: Int) {
    pokemonsSearch(
      name_Icontains: $keyword,
      attack_Gt: $attack_Gt,
      attack_Lt: $attack_Lt,
      experienceGrowth_Gt: $experienceGrowth_Gt,
      experienceGrowth_Lt: $experienceGrowth_Lt,
      type1_Name: $type1_Name,
      pokedexNumber: $pokedexNumber) {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          id
          name
          image
          attack
          defense
          type1 {
            name
            color
          }
          type2 {
            name
            color
          }
          pokedexNumber
        }
        cursor
      }
    }
  }
`

export const withSearch = graphql(SEARCH_POKEMONS, {
    options: ({
                  keyword,
                  attack_Gt,
                  attack_Lt,
                  experienceGrowth_Gt,
                  experienceGrowth_Lt,
                  type1_Name,
                  pokedexNumber
              }) => ({
        variables: {
            keyword,
            attack_Gt,
            attack_Lt,
            experienceGrowth_Gt,
            experienceGrowth_Lt,
            type1_Name,
            pokedexNumber
        }
    }),
    props: ({ data }) => ({
        data: {
            ...data,
            loadMore: () => data.fetchMore({
                updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
                    const previousPokemons = previousResult.pokemonsSearch || {}
                    const currentPokemons = fetchMoreResult.pokemonsSearch || {}
                    const previousData = previousPokemons.edges || []
                    const currentData = currentPokemons.edges || []
                    return {
                        pokemons: {
                            ...previousPokemons,
                            data: [...previousData, ...currentData],
                            pageInfo: currentPokemons.pageInfo
                        }
                    }
                }
            })
        }
    })
})
