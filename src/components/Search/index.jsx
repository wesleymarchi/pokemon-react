import React from 'react';
import { Input, H1, Container } from './styles';

export const Search = ({ handleSearch }) => {
    return (
        <Container type='search'>
            <H1>800 <strong>Pokemons</strong> for you to choose your favorite</H1>
            <Input role='search' type='search' placeholder='Find your pokémon...' onChange={handleSearch} />
        </Container>
    );
}
