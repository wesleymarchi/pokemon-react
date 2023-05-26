import React from 'react';
import {Section, LegendTitle, Legend, Img, Description, Features, LoadingErrorContainer, Tags} from './styles';
import {SparkLineFeature} from '../SparkLineFeature';
import {Loading} from '../Loading';
import {ErrorLoading} from '../ErrorLoading';
import {Tag} from '../Tag';
import {useNearScreen} from '../../hooks/useNearScreen';

export const LegendaryHero = (props) => {
    const {
        data: {
            loading,
            error,
            pokemonsSearch
        },
        section
    } = props;

    if (loading) {
        return <LoadingErrorContainer><Loading /></LoadingErrorContainer>
    }

    if (error) {
        return <LoadingErrorContainer><ErrorLoading /></LoadingErrorContainer>
    }

    const {
        edges = []
    } = pokemonsSearch || {};

    if (edges.length === 0) {
        <LoadingErrorContainer><ErrorLoading message={"Sorry, we could't find the pokemons"} /></LoadingErrorContainer>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, ref] = useNearScreen()

    const {
        node: {
            name,
            image,
            description,
            hp,
            experienceGrowth,
            attack,
            defense,
            spAttack,
            spDefense,
            pokedexNumber,
            type1,
            type2,
            legendaryPercentage
        }
    } = edges[0];

    return (
        <Section aria-label='Legendary Pokemon Section' ref={ref}>
            {show &&
                <>
                    <LegendTitle aria-label='Tittle'>
                        <h1>{section}</h1>
                        <hr title={`Legendary Pokemon Section ${section}`} />
                    </LegendTitle>
                    <Legend>
                        <Img role='img' aria-label='Legendary Pokemon'>
                            <img src={image} alt={`image of legendary pokémon #${pokedexNumber}`} />
                        </Img>
                        <Description>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <Tags>
                                <Tag {...type1} />
                                {type2.name !== 'no-type' && <Tag {...type2} />}
                            </Tags>
                            {section === 'Legends' &&
                                <SparkLineFeature
                                    name='Legendary Percentage'
                                    max='100'
                                    value={legendaryPercentage}
                                    legend
                                />}
                            <Features>
                                <SparkLineFeature
                                    name='Healthy Points'
                                    max='255'
                                    value={hp}
                                />
                                <SparkLineFeature
                                    name='Experience'
                                    max='1640000'
                                    value={experienceGrowth}
                                />
                                <SparkLineFeature
                                    name='Attack'
                                    max='185'
                                    value={attack}
                                />
                                <SparkLineFeature
                                    name='Defense'
                                    max='230'
                                    value={defense}
                                />
                                <SparkLineFeature
                                    name='Special Attack'
                                    max='194'
                                    value={spAttack}
                                />
                                <SparkLineFeature
                                    name='Special Defense'
                                    max='230'
                                    value={spDefense}
                                />
                            </Features>
                        </Description>
                    </Legend>
                </>}
        </Section>
    );
}
