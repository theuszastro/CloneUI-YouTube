import React from 'react';

import { Container, Separator } from './styles';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

const Query: React.FC = () => {
    return (
        <Container>
            <Header />

            <Separator>
                <Menu />

                <Main>
                    <h1>Oi Turu Bom?</h1>
                </Main>
            </Separator>
        </Container>
    );
}

export default Query;