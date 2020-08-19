import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import ContextProvider from './pages/context';

import { Dark, Light } from './styles/themes';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Query from './pages/query';
import Subscript from './pages/inscritos';

interface Props {
  title: string;
  
  colors: {
    primary: string;
    secondary: string;
    icons: string;
    iconsActive: string;
    label: string;
    input_text: string;
    input_fundo: string;
    liActive: string;
    button: string;
    button_border: string;
    subscript: string;
    like: string;
  }
}

const App: React.FC = () => {
  const [Theme, setTheme] = useState<Props>(Light);
  const [Change, setChange] = useState('');
  const [Mostrar, setMostrar] = useState(false);
 
  const Toggle = () => {
    Theme.title === 'light'? setChange(Dark.title) : setChange(Light.title);
  }

  useEffect(() => {
    const ThemeStorage = localStorage.getItem('theme');

    if(ThemeStorage === null){
      localStorage.setItem('theme', 'light');
      setMostrar(true);

      return;
    }

    if(Change.length > 0 && Theme.title !== Change){ 
      Change === 'light'? setTheme(Light) : setTheme(Dark)
      setChange('');

      localStorage.setItem('theme', Change);  

      return;
    }

    ThemeStorage === 'light'? setTheme(Light) : setTheme(Dark);

    if(Mostrar)
      return;

    setMostrar(true);
  }, [Change]);

  return Mostrar? (
    <ContextProvider>
      <ThemeProvider theme={Theme} >
        <BrowserRouter>
          <Route path="/" exact component={() => <Home MudarTema={Toggle} />}/>
          <Route path="/q=" component={() => <Query MudarTema={Toggle} />} />
          <Route path="/feed/subscript" component={() => <Subscript MudarTema={Toggle} />} />
        </BrowserRouter>
      </ThemeProvider>
      
      <GlobalStyle />
    </ContextProvider>
  ) : null
}

export default App;