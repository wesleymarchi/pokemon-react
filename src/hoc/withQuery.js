import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_POKEMONS = gql`
  query getPokemons($page: Int!) {
    pokemons(page: $page, limit: 21) {
      page
      pages
      hasNext
      hasPrev
      data {
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
    }
  }
`

export const withQuery = graphql(GET_POKEMONS, {
    options: () => ({ variables: { page: 1 } }),
    props: ({ data }) => ({
        data: {
            ...data,
            loadMore: () => data.fetchMore({
                variables: { page: data.pokemons.page + 1 },
                updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
                    const previousPokemons = previousResult.pokemons || {}
                    const currentPokemons = fetchMoreResult.pokemons || {}
                    const previousData = previousPokemons.data || []
                    const currentData = currentPokemons.data || []
                    return {
                        pokemons: {
                            ...previousPokemons,
                            data: [...previousData, ...currentData],
                            page: currentPokemons.page,
                            hasNext: currentPokemons.hasNext
                        }
                    }
                }
            })
        }
    })
})
