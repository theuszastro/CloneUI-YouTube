import React, { useEffect, useState } from 'react';

import Header from '../components/header';
import Menu from '../components/menu';
import Main from '../components/main';

import Grid from '../components/inscritos/grid';
import { useStyle } from '../context';

import { Container, Separator } from './styles';

interface Props{
    MudarTema(): void;
}

const Subscript: React.FC<Props> = ({ MudarTema }) => {
    const [Mostrar, setMostrar] = useState(false);
    const {setListStyle} = useStyle();
    
    useEffect(() => {
        const style = localStorage.getItem('style');

        setListStyle(style);
        setMostrar(true);
    }, []);

    return Mostrar? (
        <Container> 
            <Header ToggleTheme={MudarTema} />

            <Separator>
                <Menu />
                <Main>
                    <Grid />
                </Main>
            </Separator>
        </Container>
    ) : null
}

export default Subscript;