import React from "react";
import {Slider} from "infinite-react-carousel";

import {LegendaryCard} from '../LegendaryCard';
import {useResize} from '../../hooks/useResize';

import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {Container} from './styles';
import {Loading} from '../Loading';
import {ErrorLoading} from '../ErrorLoading';

export const Carousel = (props) => {
    const {
        data: {
            loading,
            error,
            pokemonsLegendary,
            pokemonsStronger,
            pokemonsWeaker
        },
        handleClick
    } = props;

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorLoading />
    }

    const {
        data = []
    } = pokemonsLegendary || pokemonsStronger || pokemonsWeaker || {};

    if (data.length === 0) {
        return <ErrorLoading message={"Sorry, we couldn't find the pokemons."} />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [width, ref] = useResize()

    const settings = {
        className: 'carousel',
        slidesToShow: ((width > 1024) ? 7 : (width > 768) ? 5 : (width > 600) ? 3 : (width > 374) ? 2 : 1),
        initialSlide: 1
    };

    return (
        <Container role='list' ref={ref} aria-label='Pokemon carousel'>
            <Slider
                {...settings} // Spread Syntax (espelhamento)
                prevArrow={<MdKeyboardArrowLeft tabIndex='0' title='Arrow left' aria-label='Arrow left' alt='arrow left' />}
                nextArrow={<MdKeyboardArrowRight tabIndex='0' title='Arrow right' aria-label='Arrow right' alt='arrow right' />}
            >
                {data.map(pokemon =>
                    <LegendaryCard aria-label='Card' key={pokemon.pokedexNumber} {...pokemon} handleClick={handleClick} />)
                }
            </Slider>
        </Container>
    );
}