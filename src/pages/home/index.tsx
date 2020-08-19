import React, { useEffect } from 'react';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

import { useNotification, useStyle } from '../context';

import VideosGrid from '../components/Home/Grid';
import { Container, Separator } from './styles';

interface TemaProps{
  MudarTema(): void;
}

const Home: React.FC<TemaProps> = ({ MudarTema }) => {
  const { NotificationNumber } = useNotification(); 
  const { setListStyle } = useStyle();

  if(NotificationNumber! > 0)
    document.title = `(${NotificationNumber}) YouTube`;
  else 
    document.title = `YouTube`;
  

  useEffect(() => {
    const style = localStorage.getItem('style');
    
    if(style === null){
      localStorage.setItem('style', 'grid');

      setListStyle('grid');

      return;
    }

    setListStyle(style);
  }, [])

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