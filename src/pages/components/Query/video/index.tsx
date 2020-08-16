import React from 'react';

import { Movie, Thumb, Image, Duration, Assistir, Playlist, Details, Titulo, TresPontos, Channel, Separator, Verify, Views, Description, Flex, Novo} from './styles';

interface Props {
    Foto: string;
    Duracao: string;
    Title: string;
    View: string;
    Descricao: string;
    Verificado: boolean;
    ChannelNome: string;
    Classe?: string;
}

const Video: React.FC<Props> = ({Foto, Duracao, Title, View, Descricao, Classe, ChannelNome, Verificado}) => {
    let Letras  = Descricao.split('');
    let resultado = '';
    let primeiraVez = true;

    Letras.forEach((value, index) => {
        if(Letras.length <= 136){
            resultado += Letras[index];

            return;
        }

        if(resultado.length >= 136){
            if(primeiraVez){
                primeiraVez = false
                
                resultado = resultado.concat('...');
            }

            return;
        }

        resultado += Letras[index];
    });

    return (
        <Movie
            className={Classe && `Movie ${Classe}`}
        >
            <Thumb>
                <Image src={Foto} />

                <Duration>{Duracao}</Duration>
                <Assistir className="icon" />
                <Playlist className="icon" />
            </Thumb>

            <Details>
                <Flex>
                    <Titulo>{Title}</Titulo>
                    <TresPontos className="icon" />
                </Flex>

                <Separator>
                    <Channel>{ChannelNome}</Channel>
                    {Verificado && <Verify />}

                    <Views>{View} visualizações</Views>
                </Separator>

                <Description>{resultado}</Description>

                <Novo>NOVO</Novo>    
            </Details>
        </Movie>
    );
}

export default Video;