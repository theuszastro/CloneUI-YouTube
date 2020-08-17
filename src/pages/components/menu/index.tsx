import React, { useEffect, useState } from 'react';

import { BsHouseFill, BsFillCollectionPlayFill, BsGearFill, GoChevronDown, GoChevronUp, IoMdFilm, IoLogoGameControllerB, RiBroadcastLine, AiFillFire, AiFillFlag, AiFillYoutube, AiFillBulb, AiOutlineHistory, AiFillPlaySquare, AiFillClockCircle,  AiTwotoneLike, MdVideoLibrary, MdPlaylistPlay, MdSmsFailed, MdHelp } from './icons'

import { Link } from 'react-router-dom';
import { Container, Principal, Item, Label, Parte, HeaderTitle, ChannelImage, ChannelNome, ContainerChannel, FooterTitle } from './styles';

import { useNotification, useOptions, useProfile } from '../../context';
import Dados from '../dados.json';

const Menu: React.FC = () => {
    const [Show, setShow] = useState(false);
    const [Sub, setSub] = useState(false);
    const LengthPlayList = [1, 2, 3, 4, 5, 6, 7, 8];

    const { Notification, setNotification } = useNotification();
    const { Options, setOptions } = useOptions();
    const { Profile, setProfile } = useProfile();

    const url = 'http://localhost:3000';

    const condicao = window.location.href === url.concat('/q=');

    useEffect(() => {
        const Lista = document.querySelectorAll('li');

        Lista.forEach((key: Element, value: number) => {
            Lista[value].addEventListener('click', () => {         
                Lista.forEach((key: any, index: number) => {
                    Lista[index].classList.remove('active');
                }); 

                Lista[value].classList.add('active');
            });
        });
    });

    return (
        <Container
            onClick={() => {
                Notification &&  setNotification(false);
                Options &&  setOptions(false);
                Profile &&  setProfile(false);
            }}
        >
            <Principal
                id="Lista"
            >
                <Parte>
                    <Item
                        className={condicao? 'show' : 'show active'}
                    >
                        <Link to="/">
                            <BsHouseFill size={25} />
                            <Label>Início</Label>
                        </Link>
                    </Item>

                    <Item
                        className="show"
                    >
                        <Link to="/">
                            <AiFillFire size={25}  />
                        </Link>
                        <Label>Em alta</Label>
                    </Item>

                    <Item
                        className="show"
                    >
                        <Link to="/">
                            <BsFillCollectionPlayFill size={25} />
                        </Link>
                        <Label>Inscrições</Label>
                    </Item>
                </Parte>

                <Parte>
                    <Item
                        className="show"
                    >
                        <Link to="/">
                            <MdVideoLibrary size={25} />
                        </Link>
                        <Label>Biblioteca</Label>
                    </Item>
                    
                    <Item>
                        <Link to="/">
                            <AiOutlineHistory size={25} />
                        </Link>
                        <Label>Histórico</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <AiFillPlaySquare size={25} />
                        </Link>
                        <Label>Meus vídeos</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <AiFillClockCircle size={25} />
                        </Link>
                        <Label>Assistir mais tarde</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <AiTwotoneLike size={25} />
                        </Link>
                        <Label>Videos marcados com gostei</Label>
                    </Item>

                    {
                        LengthPlayList.map((index) => (
                            <Item
                                className="hide playlist"
                            >
                                <Link to="">
                                    <MdPlaylistPlay size={25} />
                                </Link>
                                <Label>PlayList {index}</Label>
                            </Item>
                        ))
                    }

                    <Item
                        onClick={() => {
                            const playlists = document.querySelectorAll('.playlist'); 
                            const hide = document.querySelectorAll('.hide');

                            if(hide.length <= 1){
                                setShow(false);
                            } else {
                                setShow(true);
                            }

                            playlists.forEach((key: Element, value: number) => {
                                playlists[value].classList.toggle('hide');
                            });     
                        }}
                    > 
                        {
                            Show? (
                                <>
                                    <Link to="">
                                        <GoChevronUp size={25} />
                                    </Link>
                                    <Label>Mostrar Menos</Label>
                                </>
                            ) : ( 
                                <>     
                                    <Link to="">
                                        <GoChevronDown size={25} />
                                    </Link>
                                    <Label>Mostrar mais</Label>
                                </>
                            )
                        }
                    </Item>
                </Parte>

                <Parte>
                    <HeaderTitle
                        className="hide"
                    >
                        INSCRIÇÕES
                    </HeaderTitle>
                    
                    {
                        Dados.Inscritos.map((item, index) => {
                            return(
                                <Item
                                    className={item.class && `Subscript  ${item.class}`}
                                    key={index}
                                >
                                    <ContainerChannel
                                        className={item.new && `${item.new}`}
                                    >
                                        <ChannelImage src={item.channelImage} />
                                        <ChannelNome>{item.channel}</ChannelNome>
                                    </ContainerChannel>
                                </Item>
                            );   
                        })
                    }
                    <Item
                        style={{
                            marginTop: 5
                        }}
                        onClick={() => {
                            const Inscritos = document.querySelectorAll('.Subscript'); 
                            const hide = document.querySelectorAll('.Subscript.hide');

                            if(hide.length <= 1){
                                setSub(false);
                            } else {
                                setSub(true);
                            }

                            Inscritos.forEach((key: Element, value: number) => {
                                Inscritos[value].classList.toggle('hide');
                            });     
                        }}
                    >
                        {
                            Sub? (
                                <>
                                    <Link to="">
                                        <GoChevronUp size={25} />
                                    </Link>
                                    <Label>Mostrar Menos</Label>
                                </>
                            ) : ( 
                                <>     
                                    <Link to="">
                                        <GoChevronDown size={25} />
                                    </Link>
                                    <Label>Mostrar mais</Label>
                                </>
                            )
                        }
                    </Item>
                </Parte>

                <Parte>
                    <HeaderTitle
                        className="hide"
                    >
                        MAIS DO YOUTUBE
                    </HeaderTitle>
                    <Item>
                        <Link to="/">
                            <AiFillYoutube size={25} />
                        </Link>
                        <Label>YouTube Premium</Label>

                    </Item>
                    <Item>
                        <Link to="/">
                            <IoMdFilm size={25} />
                        </Link>
                        <Label>Filmes</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <IoLogoGameControllerB size={25} />
                        </Link>
                        <Label>Jogos</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <RiBroadcastLine size={25} />
                        </Link>
                        <Label>Ao Vivo</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <AiFillBulb size={25} />
                        </Link>
                        <Label>Aprender</Label>
                    </Item>
                </Parte>

                <Parte>
                    <Item>
                        <Link to="/">
                            <BsGearFill size={25} />
                        </Link>
                        <Label>Configurações</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <AiFillFlag size={25} />
                        </Link>
                        <Label>Histórico de denúncias</Label>
                    </Item>
                    
                    <Item>
                        <Link to="/">
                            <MdHelp size={25} />
                        </Link>
                        <Label>Ajuda</Label>
                    </Item>

                    <Item>
                        <Link to="/">
                            <MdSmsFailed size={25} />
                        </Link>
                        <Label>Enviar feedback</Label>
                    </Item>
                </Parte>

                <FooterTitle
                    className="hide"
                >
                    © 2020 Google LLC
                </FooterTitle>

            </Principal>
        </Container>
    );
}

export default Menu;