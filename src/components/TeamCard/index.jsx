import React from 'react';
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';

import { Container, Img, Description, TitleSection, CardContainer, SocialMedia } from './styles';

export const TeamCard = ({ src, alt, name, position, description, srcSmT, srcSmHb }) => {
    return (
        <Container tabIndex='0'>
            <Img role='img'>
                <img src={src} alt={alt} />
            </Img>

            <Description aria-label='Name' tabIndex='-1'>
                <TitleSection>
                    <h3>{name}</h3>
                    <h4>{position}</h4>
                </TitleSection>

                <CardContainer aria-label='Description'>
                    <p>{description}</p>
                </CardContainer>

                <CardContainer aria-label='Social Media'>
                    <SocialMedia>
                        <h4>Follow me: </h4>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            tabIndex='0'
                            aria-label='button Twitter'
                            href={srcSmT}
                            alt='Link for twitter social network'
                        >
                            <FaTwitterSquare size='20' />
                        </a>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            tabIndex='0'
                            aria-label='button GitHub'
                            href={srcSmHb}
                            alt='Link for Github social network'
                        >
                            <FaGithubSquare size='20' />
                        </a>
                    </SocialMedia>
                </CardContainer>
            </Description>
        </Container>
    );
}
