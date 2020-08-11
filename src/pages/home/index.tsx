import React from 'react';

import { Container } from './styles';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Menu />
        <Main />
      </Container>
    </>
  );
}

export default Home;