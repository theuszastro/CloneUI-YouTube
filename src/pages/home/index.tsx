import React from 'react';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

import VideosGrid from '../components/Home/Grid';
import { Container, Separator } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
 
      <Separator>
        <Menu /> 

        <Main>
          <VideosGrid />
        </Main>
      </Separator>
    </Container>
  );
}

export default Home;