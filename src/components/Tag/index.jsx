import React from 'react';
import { Span } from './styles';

export const Tag = ({ name, color }) => {
    return (
        <Span color={color}>
            <p>{name}</p>
        </Span>
    );
}
