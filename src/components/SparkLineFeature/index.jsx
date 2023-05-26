import React from 'react';
import { Container } from './styles';

export const SparkLineFeature = (props) => {
    const {
        name = 'Healthy Points',
        max = 100,
        value = 80,
        legend = false
    } = props;

    return (
        <Container max={max} value={value} legend={legend}>
            <p data-value={value}>{name}</p>
            <progress max={max} value={value} />
        </Container>
    );
}
