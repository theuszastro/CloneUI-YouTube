import React from 'react';

import { Container, VideoThumb, Separator, ChannelImage, Titulo, ChannelNome, Verificado, Visualizacao, MaisTarde, PlayList, TresPontos, Duration } from './styles';

export interface Props {
    titulo: string;
    channel: string;
    channelImage: string;
    channelVerify: boolean;
    visualizacoes: string[]; 
    duration: string;
    thumb: string;
    isSmall: boolean;
}

const ChannelVideo: React.FC<Props> = ({ titulo, channel, channelImage, channelVerify, visualizacoes, duration, thumb, isSmall }) => {
    var Title = titulo.split(''); 
    var limitado = '';
    var PrimeiraVez = true;

    var isPequeno = document.querySelector('.Thumb.aumentar')!;
    var Duracao = document.querySelectorAll('.SmallDuration')!;
    var Thumb = document.querySelectorAll('.Thumb')!;
    var Info = document.querySelectorAll('.info')!;
    var TituloVideo = document.querySelectorAll('.titulo')!;
    var Icon = document.querySelectorAll('.tresponto')!;

    Title.forEach((key: string, value: number) => {
        if(Title.length < 41){
            limitado = limitado + Title[value];

            return;
        }

        if(limitado.length > 40){
            if(PrimeiraVez){
                PrimeiraVez = false;

                limitado = limitado.concat('...');
            }

            return;
        }

        limitado = limitado + Title[value];
    });

    if(limitado.length === 40){
        limitado = limitado.concat('...');

        console.log(limitado);
    }



    if(isSmall){
        Duracao.forEach((key: Element, value : number) => {
            Thumb[value].classList.add('aumentar');
            Info[value].classList.add('aumentar');
            Duracao[value].classList.add('aumentar');
            TituloVideo[value].classList.add('aumentar');
            Icon[value].classList.add('aumentar');
        })
    } else {
        if(isPequeno){
            Duracao.forEach((key: Element, value : number) => {
                Thumb[value].classList.remove('aumentar');
                Info[value].classList.remove('aumentar');
                Duracao[value].classList.remove('aumentar');
                TituloVideo[value].classList.remove('aumentar');
                Icon[value].classList.remove('aumentar');
            })
        }
    }

    return (
        <Container>
            <Separator
                className="SeparatorThumb"
            >
                <MaisTarde className="icons" /> 

                <PlayList className="icons" />

                <Duration className="SmallDuration">
                    {duration}
                </Duration>

                <VideoThumb
                    className="Thumb"
                    src={thumb}
                />
            </Separator>

            <Separator
                className="info"
            >
                <ChannelImage src={channelImage} />

                <Titulo
                    className="titulo"
                >
                    {limitado}
                </Titulo>
            
                <TresPontos className="icons tresponto" />
            </Separator>     

            <Separator
                className="Channel"
            >
                <ChannelNome>{channel}</ChannelNome>

                {channelVerify && <Verificado /> }
            </Separator>

            <Separator
                className="Channel"
            >
                <Visualizacao>{visualizacoes[0]} visualizações</Visualizacao>
            </Separator>
        </Container>
    );
}

export default ChannelVideo;