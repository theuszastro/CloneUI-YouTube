import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/home';

import { BrowserRouter, Route } from 'react-router-dom';
import SmallProvider from './pages/context';

const App: React.FC = () => {
  return (
    <SmallProvider>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
      
      <GlobalStyle />
    </SmallProvider>
  );
}

export default App;