import React from 'react';

import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/home';

import { BrowserRouter, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
      
      <GlobalStyle />
    </>
  );
}

export default App;