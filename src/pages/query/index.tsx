import React from 'react';

import { Container, Separator } from './styles';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

import Filter from '../components/Query/filtro';
import Channel from '../components/Query/Channel';
import Recentes from '../components/Query/recente';

interface TemaProps{
    MudarTema(): void;
}

const Query: React.FC<TemaProps> = ({ MudarTema }) => {
    
    document.title = `alanzoka - Youtube`;
    
    return (
        <Container>
            <Header ToggleTheme={MudarTema} />

            <Separator>
                <Menu />

                <Main>
                    <Filter />
                    <Channel />
                    <Recentes />
                </Main>
            </Separator>
        </Container>
    );
}

export default Query;