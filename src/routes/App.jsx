import React from 'react';
import { Router } from '@reach/router';
import { HelmetProvider } from 'react-helmet-async';

//* Styles
import { ThemeProvider } from 'styled-components';
import { variables } from '../styles/GlobalStyles';
import { GlobalStyles } from '../styles/styles';

//* Components
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Pokedex } from '../pages/Pokedex';
import { Legends } from '../pages/Legends';
//import { Documentation } from '/pages/Documentation';
import { NotFound } from '../pages/NotFound';
//import { OurTeam } from '/src/pages/OurTeam';

export const App = () => {
  return (
      <ThemeProvider theme={variables}>
        <GlobalStyles />
        <Layout>
          <HelmetProvider>
            <Router>
              <NotFound default />
              <Home path='/' />
              <Pokedex path='/pokedex' />
              <Legends path='/legends' />
                {/*<Documentation path='/documentation' />*/}
                    {/*<OurTeam path='/team' />*/}
            </Router>
          </HelmetProvider>
        </Layout>
      </ThemeProvider>
  );
}
