import React from 'react';

import { Helmet } from 'react-helmet-async';

import { Hero, Container, Description, Banner } from './styles';

import { Button } from '../../components/Button';

import Pikachu from '../../assets/pikachu.png';
import Pokeball from '../../assets/pokeball.png';
import Cloud from '../../assets/cloud.png';

export const Home = () => {
    return (
        <Hero aria-label='Hero'>
            <Helmet>
                <meta
                    charSet='utf-8'
                    lang='en'
                    name='Description'
                    content='This is the presentation page of the Pokedex page of the Platzi Master project'
                />
                <meta name='author' content='PokeSpartns' />
                <title>Home page | Pokedex</title>
            </Helmet>

            <Container role='main' aria-label='Main content'>

                <Description role='article' aria-label='Description'>
                    <h1>Find all your favorite Pokemon</h1>
                    <p aria-label='Description'>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button to='/pokedex' tabIndex='-1' name='See pokemons' role='button' title='See pokemons' />
                </Description>

                <Banner role='img' aria-labelledby='Pikachu jumping' area-aria-describedby='Animation of Pikachu jumping throwing a pokeball'>
                    <img area-label='Pikachu image' id='Pikachu' src={Pikachu} alt='Pikachu illustration' />
                    <img area-label='Pokeball image' id='Pokeball' src={Pokeball} alt='Pokeball' />
                    <img area-label='Cloud image' id='Cloud' src={Cloud} alt='cloud' />
                    <img area-label='Cloud image' id='Cloud2' src={Cloud} alt='cloud' />
                </Banner>

            </Container>
        </Hero>
    );
}
