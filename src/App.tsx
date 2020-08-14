import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import ContextProvider from './pages/context';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import Query from './pages/query';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/q=" component={Query} />
      </BrowserRouter>
      
      <GlobalStyle />
    </ContextProvider>
  );
}

export default App;