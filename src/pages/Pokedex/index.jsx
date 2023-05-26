import React, { useState } from 'react';
import { ModalCardWithPokemonDetails } from '../../containers/ModalCardWithPokemonDetails';
import { Search } from '../../components/Search';
import { Filters } from '../../components/Filters';
import { PreviewCardsWithQuery } from '../../containers/PreviewCardsWithQuery';
import { PreviewCardsWithSearch } from '../../containers/PreviewCardsWithSearch';
import { Main } from './styles';

export const Pokedex = () => {
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({});
    const [pokedexNumber, setPokedexNumber] = useState({});

    const handleSearch = (e) => setSearch(e.target.value)
    const handleFilter = (value) => setFilter(value)
    const handleShowModal = (pokedexNumber) => {
        setShowModal(!showModal);
        setPokedexNumber(pokedexNumber);
    }

    return (
        <Main>
            <ModalCardWithPokemonDetails
                showModal={showModal}
                handleShowModal={handleShowModal}
                {...pokedexNumber}
            />
            <Search handleSearch={handleSearch} />
            <Filters handleFilter={handleFilter} />
            {search || Object.entries(filter).length !== 0
                ? <PreviewCardsWithSearch handleShowModal={handleShowModal} keyword={search} {...filter} />
                : <PreviewCardsWithQuery handleShowModal={handleShowModal} />}
        </Main>
    );
}
