import React from 'react';
import {
    Container,
    Img,
    Tags,
    Description,
    TitleSection,
    DetailsPokemons,
    Id,
    CardContainer,
    HealthyContainer,
    Features,
    FeatureContainer
} from './styles';

import { SparkCicleFeature } from '../SparkCircleFeature';
import { Tag } from '../Tag';
import { SparkLineFeature } from '../SparkLineFeature';

export const PokemonCard = (props) => {
    const {
        name = 'Charizard',
        image = 'https://s3-alpha-sig.figma.com/img/1a0f/5126/b638810ffccc93e1acae4b12a5feaea6?Expires=1685923200&Signature=TD4Q2CTcqzRoI4-iclY1NrBd~4IZPuI0JE~cz3DJ5wYmCiJo5B01fb7dJ8jOZx7X-hwjK0-5LDqavvmhIAdBqdWBz~gZIEbrU6yt8Fm4Jr6egBTT31v9v8M5gVkJ~ooYxhh-Ny3FAOmdlrjki85vBbqKYmcuXQ03TjXJvEuOtdKRqe6KVaPphKFhUWx4FJzHm17zz53rN4D9U9CnwPk7to3~IHGJYqzIcvvoSg5USvBj~E6CkrqgpFyFHjGKc~jxhBDthRIBVYuDAs6kr179CfpK4Qeg5me~XmZ6iIb7AuiwIrT0qOGXvF4Sys0mmrko0ahaEmTjGtKq-FPi4Ms1YQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
        <Container>
            <Img color={type1.color}>
                <img
                    src={image}
                    alt={`Image de pokemon ${name}`}
                />
                <Tags>
                    <Tag {...type1} />
                    {type2.name !== 'no-type' && <Tag {...type2} />}
                </Tags>
            </Img>

            <Description>
                <TitleSection>
                    <h3>{name}</h3>
                    <DetailsPokemons>
                        <h3>Generation {generation}</h3>
                        <Id>
                            <p>{pokedexNumber}</p>
                        </Id>
                    </DetailsPokemons>
                </TitleSection>

                <CardContainer>
                    <h4>Abilities</h4>
                    <p>{abilities.replace(/,/g, ' - ')}</p>
                </CardContainer>

                <CardContainer>
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
                </CardContainer>

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
        </Container>
    );
}
