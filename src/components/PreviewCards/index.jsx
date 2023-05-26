import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { PreviewCard } from '../PreviewCard';
import { ErrorLoading } from '../ErrorLoading';
import { Loading } from '../Loading';
import { Container } from './styles';

export const PreviewCards = (props) => {
    const {
        data: {
            loading,
            error,
            pokemons,
            loadMore
        },
        handleShowModal
    } = props;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorLoading />
    }

    const {
        data = [],
        hasNext
    } = pokemons || {};

    if (data.length === 0) {
        return <ErrorLoading message={"Sorry, we couldn't find the pokemons"} />
    }

    return (
        <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasNext}
        >
            <Container>
                {data
                    .map(pokemon =>
                        <li key={pokemon.id}>
                            <PreviewCard {...pokemon} handleShowModal={handleShowModal} />
                        </li>)}
            </Container>
        </InfiniteScroll>
    );
}

export const PreviewCardsSearch = (props) => {
    const {
        data: {
            loading,
            error,
            pokemonsSearch,
            loadMore
        },
        handleShowModal
    } = props;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorLoading />
    }

    const {
        edges = [],
        pageInfo: { hasNextPage = false }
    } = pokemonsSearch || {};

    if (edges.length === 0) {
        return <ErrorLoading message={"Sorry, we couldn't find the pokemons"} />
    }

    return (
        <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasNextPage}
        >
            <Container>
                {edges
                    .map(({ node }) =>
                        <li key={node.id}>
                            <PreviewCard {...node} handleShowModal={handleShowModal} />
                        </li>)}
            </Container>
        </InfiniteScroll>
    );
}
