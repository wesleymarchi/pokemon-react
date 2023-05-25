import React from 'react';
import pokeball from '../../assets/pokeball.png';
import {Container, Img, Span} from "./styles";

export const Loading = () => {
    return (
        <Container>
            <Img>
                <img src={pokeball} alt='Loading cards' />
            </Img>
            <Span>
                <p>Loading...</p>
            </Span>
        </Container>
    );
}
