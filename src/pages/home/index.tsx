import React from 'react';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

import { useNotification } from '../context';

import VideosGrid from '../components/Home/Grid';
import { Container, Separator } from './styles';

interface TemaProps{
  MudarTema(): void;
}

const Home: React.FC<TemaProps> = ({ MudarTema }) => {
  const { NotificationNumber } = useNotification(); 

  if(NotificationNumber! > 0){
    document.title = `(${NotificationNumber}) Youtube`;
  } else {
    document.title = `YouTube`;
  }
   
  return (
    <Container>
      <Header ToggleTheme={MudarTema}/>
    
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