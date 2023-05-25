import React from "react";
import {Container, Img, Span} from './styles';
import loadingPikachu from '../../assets/loadingPikachu.png';

export const ErrorLoading = (props) => {
    const {
        message = 'Sorry there was a problem.'
    } = props;

    return (
        <Container>
            <Img>
                <img src={loadingPikachu} alt='Sorry there was a problem' />
            </Img>
            <Span>
                <h3>Pika pika pikachuuuuuu!</h3>
                <p>{message}</p>
            </Span>
        </Container>
    );
}