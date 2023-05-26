import React from 'react';
import { Section, Container, Banner, Img, Message, Text } from './styles';
import teamRocket from '../../assets/teamRocket.png';
import { Button } from '../../components/Button';

export const NotFound = () => {
    return (
        <Section>
            <Container>
                <Banner>
                    <h1>
                        404
                    </h1>
                    <Img>
                        <img src={teamRocket} />
                    </Img>
                </Banner>

                <Message>
                    <Text>
                        <p>The rocket team</p>
                        <p>has won this time.</p>
                    </Text>
                    <Button name='Return' />
                </Message>
            </Container>
        </Section>
    );
}
