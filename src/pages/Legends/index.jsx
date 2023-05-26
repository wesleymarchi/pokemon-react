import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { StylesLegends, Container } from './styles';
import { LegendsContainer } from '../../containers/LegendsContainer';

export const Legends = () => {
    const [legendaryPokemon, setLegendaryPokemon] = useState({ pokedexNumber: 380 });
    const [strongerPokemon, setStrongerPokemon] = useState({ pokedexNumber: 487 });
    const [weakerPokemon, setWeakerPokemon] = useState({ pokedexNumber: 172 });

    const handleLegendaryPokemon = (value) => setLegendaryPokemon(value);
    const handleStrongerPokemon = (value) => setStrongerPokemon(value);
    const handleWeakerPokemon = (value) => setWeakerPokemon(value);

    return (
        <StylesLegends>
            <Helmet>
                <meta
                    charSet='utf-8'
                    lang='en'
                    name='Description'
                    content='This section contains the most powerful characters in the pokemon world.'
                />
                <meta name='author' content='PokeSpartns' />
                <title>Legends</title>
            </Helmet>
            <Container>
                <LegendsContainer section='Legends' coverPokemon={legendaryPokemon} handleClick={handleLegendaryPokemon} />
                <LegendsContainer section='Stronger' coverPokemon={strongerPokemon} handleClick={handleStrongerPokemon} />
                <LegendsContainer section='Weaker' coverPokemon={weakerPokemon} handleClick={handleWeakerPokemon} />
            </Container>
        </StylesLegends>
    );
}
