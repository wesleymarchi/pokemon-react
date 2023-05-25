import React from 'react';
import { Container, Img, Description, ContainerProps } from './styles';
import { SparkCicleFeature } from '../SparkCircleFeature';
import { Tag } from '../Tag';
import { useNearScreen } from '../../hook/useNearScreen';

export const PreviewCard = (props) => {
    const {
        handleShowModal,
        name = 'Charizard',
        image = 'https://s3-alpha-sig.figma.com/img/1a0f/5126/b638810ffccc93e1acae4b12a5feaea6?Expires=1685923200&Signature=TD4Q2CTcqzRoI4-iclY1NrBd~4IZPuI0JE~cz3DJ5wYmCiJo5B01fb7dJ8jOZx7X-hwjK0-5LDqavvmhIAdBqdWBz~gZIEbrU6yt8Fm4Jr6egBTT31v9v8M5gVkJ~ooYxhh-Ny3FAOmdlrjki85vBbqKYmcuXQ03TjXJvEuOtdKRqe6KVaPphKFhUWx4FJzHm17zz53rN4D9U9CnwPk7to3~IHGJYqzIcvvoSg5USvBj~E6CkrqgpFyFHjGKc~jxhBDthRIBVYuDAs6kr179CfpK4Qeg5me~XmZ6iIb7AuiwIrT0qOGXvF4Sys0mmrko0ahaEmTjGtKq-FPi4Ms1YQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        attack = 419,
        defense = 49,
        type1 = { name: 'Grass', color: '#30D97E' },
        type2 = { name: 'Poison', color: '#7A30D9' },
        pokedexNumber
    } = props;

    const [show, ref] = useNearScreen();
    const handleClick = () => handleShowModal({ pokedexNumber: pokedexNumber })

    return (
        <Container aria-label={name} tabIndex='0' ref={ref} onClick={handleClick}>
            {show &&
                <>
                    <Description>
                        <h2>{name}</h2>

                        <ContainerProps>
                            <SparkCicleFeature value={attack} name='Attack' />
                            <SparkCicleFeature value={defense} name='Defense' />
                        </ContainerProps>

                        <ContainerProps>
                            <Tag {...type1} />
                            {type2.name !== 'no-type' && <Tag {...type2} />}
                        </ContainerProps>
                    </Description>

                    <Img tabIndex='-1' color={type1.color}>
                        <img
                            tabIndex='-1'
                            src={image}
                            alt={`Image pokemon ${name}`}
                        />
                    </Img>
                </>}
        </Container>
    );
}
