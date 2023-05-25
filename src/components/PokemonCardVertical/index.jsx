import React from 'react';
import {
    Container,
    Img,
    CardContainer,
    Description,
    Tags,
    Details,
    DetailsPokemons,
    Id,
    Card,
    HealthyContainer,
    Features,
    FeatureContainer
} from './styles';

import { SparkCicleFeature } from '../SparkCircleFeature';
import { SparkLineFeature } from '../SparkLineFeature';
import { Tag } from '../Tag';

export const PokemonCardVertical = (props) => {
    const {
        name = 'Charizard',
        image = 'https://vignette.wikia.nocookie.net/es.pokemon/images/9/95/Charizard.png/revision/latest/scale-to-width-down/1000?cb=20180325003352',
        attack = 165,
        spAttak = 130,
        defense = 49,
        spDefense = 271,
        type1 = { name: 'Grass', color: '#30D97E' },
        type2 = { name: 'Poison', color: '#7A30D9' },
        abilities = 'Overgrow,Chlorophyll',
        hp = 75,
        experienceGrowth = 1250000,
        generation = 1,
        pokedexNumber = 578
    } = props;

    return (
        <Container color={type1.color}>
            <h3>{name}</h3>
            <Img>
                <img
                    src={image}
                    alt={`Image de pokemon #${pokedexNumber}`}
                />
            </Img>

            <CardContainer>
                <Description>
                    <Details>
                        <Tags>
                            <Tag {...type1} />
                            {type2.name !== 'no-type' && <Tag {...type2} />}
                        </Tags>
                        <DetailsPokemons>
                            <h3>Generation {generation}</h3>
                            <Id>
                                <p>{pokedexNumber}</p>
                            </Id>
                        </DetailsPokemons>
                    </Details>

                    <Card>
                        <h4>Abilities</h4>
                        <p>{abilities.replace(/,/g, ' - ')}</p>
                    </Card>

                    <Card>
                        <HealthyContainer>
                            <SparkLineFeature
                                name='Healthy'
                                max='255'
                                value={hp}
                            />
                            <SparkLineFeature
                                name='Experience'
                                max='1640000'
                                value={experienceGrowth}
                            />
                        </HealthyContainer>
                    </Card>

                    <Features>
                        <FeatureContainer>
                            <SparkCicleFeature value={attack} name='Attack' />
                        </FeatureContainer>
                        <FeatureContainer>
                            <SparkCicleFeature value={defense} name='Defense' />
                        </FeatureContainer>
                        <FeatureContainer>
                            <SparkCicleFeature value={spAttak} name='SP Attack' />
                        </FeatureContainer>
                        <FeatureContainer>
                            <SparkCicleFeature value={spDefense} name='Sp Defense' />
                        </FeatureContainer>
                    </Features>
                </Description>
            </CardContainer>
        </Container>
    );
}
