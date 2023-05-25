import React from 'react'
import { LegendaryHeroWithPokemonDetails } from './LegendaryHeroWithPokemonDetails';
import { CarouselWithLegends } from './CarouselWithLegends';
import { CarouselWithStrongers } from './CarouselWithStrongers';
import { CarouselWithWeaker } from './CarouselWithWeaker';

export const LegendsContainer = (props) => {
    const {
        section,
        handleClick,
        coverPokemon
    } = props;

    return (
        <>
            <LegendaryHeroWithPokemonDetails
                aria-label={section}
                section={section}
                {...coverPokemon}
            />
            {
                section === 'Legends' ? <CarouselWithLegends handleClick={handleClick} section={section} />
                    : section === 'Stronger' ? <CarouselWithStrongers handleClick={handleClick} section={section} />
                        : <CarouselWithWeaker handleClick={handleClick} section={section} />
            }
        </>
    );
}
