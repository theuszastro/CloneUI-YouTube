import React from 'react';

import { Container, Anuncio, Separator, MostrarMais, Label } from './styles';

import Video from '../video';
import Dados from '../../dados.json';

const Recentes: React.FC = () => {
    return (
        <Container>
            <Anuncio>Vídeo mais recente do canal alanzoka</Anuncio>

            {
                Dados.AlanVideos.map((item, index) => {
                    return(
                        <Video 
                            key={index}
                            ChannelNome={item.channel}
                            Foto={item.tumb}
                            Duracao={item.duration}
                            Title={item.titulo}
                            View={item.views}
                            Descricao={item.descricao}
                            Verificado={item.verify}
                            Classe={index === 0 || index === 1? undefined : 'ocultar'}
                        />
                    )
                })
            }

            <MostrarMais
                className="Mais"
                onClick={() => {
                    const Mais = document.querySelector('.Mais')!;
                    const Ocultos = document.querySelectorAll('.ocultar')!;

                    Ocultos.forEach((value, index) => {
                        Ocultos[index].classList.remove('ocultar');
                    });
                    Mais.classList.add('remover');
                }}
            >
                <Label>+{Dados.AlanVideos.length - 2} MAIS</Label>
            </MostrarMais>

            <Separator>
                {
                    Dados.AlanVideos.map((item, index) => {
                        return(
                            <Video 
                                key={index}
                                ChannelNome={item.channel}
                                Foto={item.tumb}
                                Duracao={item.duration}
                                Title={item.titulo}
                                View={item.views}
                                Descricao={item.descricao}
                                Verificado={item.verify}
                                Classe={index === 0 || index === 1 || index === 2? undefined : 'hidden'}
                            />
                        )
                    })
                }

                <MostrarMais
                    className="Mais2"
                    onClick={() => {
                        const Mais = document.querySelector('.Mais2')!;
                        const Ocultos = document.querySelectorAll('.hidden')!;

                        Ocultos.forEach((value, index) => {
                            Ocultos[index].classList.remove('hidden');
                        });
                        Mais.classList.add('remover');
                    }}
                >
                    <Label>+{Dados.AlanVideos.length - 3} MAIS</Label>
                </MostrarMais>
            </Separator>

            <Separator>
                {
                    Dados.AlanVideos.map((item, index) => {
                        return(
                            <Video 
                                key={index}
                                ChannelNome={item.channel}
                                Foto={item.tumb}
                                Duracao={item.duration}
                                Title={item.titulo}
                                View={item.views}
                                Descricao={item.descricao}
                                Verificado={item.verify}
                            />
                        )
                    })
                }
                    
                {
                    Dados.AlanVideos.map((item, index) => {
                        return(
                            <Video
                                key={index}
                                ChannelNome={item.channel}
                                Foto={item.tumb}
                                Duracao={item.duration}
                                Title={item.titulo}
                                View={item.views}
                                Descricao={item.descricao}
                                Verificado={item.verify}
                            />
                        )
                    })
                }
            </Separator>
        </Container>
    );
}

export default Recentes;