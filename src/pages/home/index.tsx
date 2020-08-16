import React from 'react';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

import { useNotification } from '../context';

import VideosGrid from '../components/Home/Grid';
import { Container, Separator } from './styles';

const Home: React.FC = () => {
  const { NotificationNumber } = useNotification(); 

  if(NotificationNumber! > 0){
    document.title = `(${NotificationNumber}) Youtube`;
  } else {
    document.title = `YouTube`;
  }
   
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