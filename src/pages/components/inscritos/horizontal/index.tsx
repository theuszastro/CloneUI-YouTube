import React from 'react';

import { Container, Header, Image, Nome, Video, Separator, Thumb, Duration, MaisTarde, PlayList, Titulo, Verify, Descricao, Visu, Play } from './styles';

interface Props {
    title: string;
    nome: string;
    image: string;
    verify: boolean;
    views: string; 
    duration: string;
    thumb: string;
    descricao: string;
}

const VideoHorizontal: React.FC<Props> = ({ title, nome, image, verify, views, duration, thumb, descricao, children }) => {
    const desc = descricao.split('');
    let resultadoDesc = ''
    let vezPrimeira = true;

    desc.forEach((value, index) => {
        if(desc.length <= 136){
            resultadoDesc += desc[index];

            return;
        }

        if(resultadoDesc.length >= 136){
            if(vezPrimeira){
                vezPrimeira = false;
                resultadoDesc = resultadoDesc.concat('...');
    
                return;
            }

            return;
        }

        resultadoDesc += desc[index];
    })
    
    return (
        <Container>
            <Header>
                <Separator style={{display: 'flex', alignItems: 'center'}} >
                    <Image src={image} />
                    <Nome>{nome}</Nome>
                </Separator>
                
                { children && children }
            </Header>

            <Video>
                <Separator className="video">
                    <Play />
                    <Thumb src={thumb} />
                    <Duration>{duration}</Duration>
                    <MaisTarde />
                    <PlayList />
                </Separator>

                <Separator className="info">
                    <Titulo>{title}</Titulo>
                    <Separator className="desc">
                        <Nome className="channel">{nome}</Nome>
                        {verify && <Verify />}
                        <Visu>{views} visualizações</Visu>
                    </Separator>
                    <Descricao>{resultadoDesc}</Descricao>
                </Separator>
            </Video>
        </Container>
    );
}

export default VideoHorizontal;