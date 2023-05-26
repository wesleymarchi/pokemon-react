import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid } from './styles';
import { TeamCard } from '../../components/TeamCard';
import employee1 from '../../assets/';

export const OurTeam = () => {
    return (
        <Section>
            <Helmet>
                <title>OurTeam</title>
            </Helmet>
            <Container>
                <h1>Our Tems</h1>
                <p>TEAM INTRODUCTION</p>
                <Grid>
                    <TeamCard
                        src={employee1}
                        alt=''
                        name=''
                        position=''
                        description='' srcSmHb='link'
                        srcSmT='SM'
                    />
                </Grid>
            </Container>
        </Section>
    );
}
