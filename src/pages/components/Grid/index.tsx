import React, { useState, useEffect } from 'react';

import { Container, Grid, PreAnuncio, Group, Close, MostrarMais, IconBaixo, ContainerMais } from './grid';

import { Postagens, MaisPostagem, MostrarPostagem } from './postagem';

import Dados from '../dados.json';
import ChannelVideo from '../video';
import Postagem from '../Postagem';

import { useSmall } from '../../context';

const VideosGrid: React.FC = () => {
    const { Pequeno } = useSmall();
    const [Mostrar, setMostrar] = useState(false);
    const [Seis, setSeis] = useState(false);

    useEffect(() => {
        const like = document.querySelectorAll('.like');
        const deslike = document.querySelectorAll('.deslike');

        like.forEach((key: Element, value: number) => {
            like[value].addEventListener('click', () => {
                if(deslike[value]){
                    deslike[value].classList.remove('active');
                }

                like[value].classList.toggle('active');
            });
            
            deslike[value].addEventListener('click', () => {
                if(like[value]){
                    like[value].classList.remove('active');
                }
                deslike[value].classList.toggle('active');
            });
        });
    });

    return (
        <Container>
            <Grid>
                {
                    Dados.VideosOito.map(item => (
                        <ChannelVideo 
                            key={item.titulo}
                            titulo={item.titulo}
                            channel={item.channel} 
                            channelImage={item.channelImage} 
                            channelVerify={item.channelVerify} 
                            visualizacoes={item.visualizacoes}
                            duration={item.duration} 
                            thumb={item.thumb}
                            isSmall={Pequeno? true : false}
                        />
                    ))
                }
            </Grid>

            <ContainerMais>
                <Group
                    className="Esconder"
                >
                    <PreAnuncio>Principais notícias</PreAnuncio>
                    <Close 
                        onClick={() => {
                            const Esconder = document.querySelectorAll('.Esconder');

                            Esconder.forEach((key: any, value: number) => {
                                Esconder[value].classList.add('hide');
                            });
                        }} 
                    />
                </Group>
                
                <Grid
                    className="Esconder"
                    id="Esconder"
                >
                    {
                        Dados.VideosQuatro.map(item => (
                            <ChannelVideo 
                                key={item.titulo}
                                titulo={item.titulo}
                                channel={item.channel} 
                                channelImage={item.channelImage} 
                                channelVerify={item.channelVerify} 
                                visualizacoes={item.visualizacoes}
                                duration={item.duration} 
                                thumb={item.thumb}
                                isSmall={Pequeno? true : false}
                            />
                        ))
                    }
                    
                    {
                        Mostrar && (
                            Dados.VideosOito.map(item => (
                                <ChannelVideo 
                                    key={item.titulo}
                                    titulo={item.titulo}
                                    channel={item.channel} 
                                    channelImage={item.channelImage} 
                                    channelVerify={item.channelVerify} 
                                    visualizacoes={item.visualizacoes}
                                    duration={item.duration} 
                                    thumb={item.thumb}
                                    isSmall={Pequeno? true : false}
                                />
                            ))
                        )
                    }
                </Grid>

                <MostrarMais
                    className="mostrar"
                    onClick={() => {
                        const MaisMostrar = document.querySelector('.mostrar')!;
                        const GridMostrar = document.querySelector('#Esconder')!;

                        setMostrar(true);

                        MaisMostrar.classList.add('NaoMostrar');
                        GridMostrar.classList.remove('Esconder');
                    }}
                >
                    <IconBaixo />
                </MostrarMais>
            </ContainerMais>

            <Grid>    
                {
                    Dados.VideosQuatro.map(item => (
                        <ChannelVideo 
                            key={item.titulo}
                            titulo={item.titulo}
                            channel={item.channel} 
                            channelImage={item.channelImage} 
                            channelVerify={item.channelVerify} 
                            visualizacoes={item.visualizacoes}
                            duration={item.duration} 
                            thumb={item.thumb}
                            isSmall={Pequeno? true : false}
                        />
                    ))   
                }
            </Grid>
            
            <Group>
                <PreAnuncio>Postagens mais recente do YouTube</PreAnuncio>
            </Group>

            <MaisPostagem>    
                <Postagens
                    className="GridPostagem"
                >
                    {
                        Seis? null : (
                            Dados.PostagemTres.map((item) => {
                                return(
                                    <Postagem 
                                        channel={item.channel}
                                        channelImage={item.channelImage}
                                        like={item.like}
                                        comments={item.comments}
                                        conteudo={item.conteudo}
                                        image={item.image}
                                    />
                                );
                            }
                        ))
                    }

                    {
                        Seis && (
                            Dados.PostagemNove.map((item) => {
                                return(
                                    <Postagem 
                                        channel={item.channel}
                                        channelImage={item.channelImage}
                                        like={item.like}
                                        comments={item.comments}
                                        conteudo={item.conteudo}
                                        image={item.image}
                                    />
                                ); 
                            })
                        )
                    }
                </Postagens>
            
                <MostrarPostagem
                    className="mostrarPostagem"
                    onClick={() => {
                        const Mostrar = document.querySelector('.mostrarPostagem')!;
                        const Postagem = document.querySelector('.GridPostagem')!;

                        setSeis(true);

                        Mostrar.classList.add('hide');
                        Postagem.classList.add('remove');
                    }}
                >
                    <IconBaixo />
                </MostrarPostagem>
            </MaisPostagem>

            <Grid>    
                {
                    Dados.VideosQuatro.map(item => (
                        <ChannelVideo 
                            key={item.titulo}
                            titulo={item.titulo}
                            channel={item.channel} 
                            channelImage={item.channelImage} 
                            channelVerify={item.channelVerify} 
                            visualizacoes={item.visualizacoes}
                            duration={item.duration} 
                            thumb={item.thumb}
                            isSmall={Pequeno? true : false}
                        />
                    ))   
                }
            </Grid>

            <Grid>    
                {
                    Dados.VideosQuatro.map(item => (
                        <ChannelVideo 
                            key={item.titulo}
                            titulo={item.titulo}
                            channel={item.channel} 
                            channelImage={item.channelImage} 
                            channelVerify={item.channelVerify} 
                            visualizacoes={item.visualizacoes}
                            duration={item.duration} 
                            thumb={item.thumb}
                            isSmall={Pequeno? true : false}
                        />
                    ))   
                }
            </Grid>

            <Grid>    
                {
                    Dados.VideosOito.map(item => (
                        <ChannelVideo 
                            key={item.titulo}
                            titulo={item.titulo}
                            channel={item.channel} 
                            channelImage={item.channelImage} 
                            channelVerify={item.channelVerify} 
                            visualizacoes={item.visualizacoes}
                            duration={item.duration} 
                            thumb={item.thumb}
                            isSmall={Pequeno? true : false}
                        />
                    ))
                }

                {
                    Dados.VideosOito.map(item => (
                        <ChannelVideo 
                            key={item.titulo}
                            titulo={item.titulo}
                            channel={item.channel} 
                            channelImage={item.channelImage} 
                            channelVerify={item.channelVerify} 
                            visualizacoes={item.visualizacoes}
                            duration={item.duration} 
                            thumb={item.thumb}
                            isSmall={Pequeno? true : false}
                        />
                    ))   
                }
            </Grid>
        </Container>
    );
}

export default VideosGrid;