import React from 'react';

import { Container } from './styles';
import { PreAnuncio } from '../Grid/styles';

import VideosGrid from '../Grid';

const Conteudo: React.FC = () => {
    

    return (
        <Container>
           <VideosGrid />

            {/* <PreAnuncio>Postagens mais recente do YouTube</PreAnuncio> */}

        </Container>
    );
}

export default Conteudo;