import React from 'react';
import { Container, Counter } from './styles';

export const SparkCicleFeature = ({ value, name }) => {
    return (
        <Container>

            <Counter>
                <p>{value}</p>
            </Counter>

            <p>{name}</p>
        </Container>
    );
}
