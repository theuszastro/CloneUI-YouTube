import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Dados from '../dados.json';
import { useSmall } from '../../context';

import { BsList, BsGearFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaKeyboard } from 'react-icons/fa';

import { 
    Container, 
    Separator, 
    Left, 
    Logo, 
    LogoMarca, 
    Brasil, 
    Center, 
    InputIcon, 
    Pesquisar, 
    Search, 
    Right, 
    Icon, 
    Video, 
    Grid, 
    Bell, 
    User,
    Notificacao,
    HeaderNotificacao,
    HeaderTitle,
    Caixa,
    Item,
    Channel,
    ChannelImage,
    Thumb
} from './styles';

const Header: React.FC = () => {
    const [Notification, setNotification] = useState(false);
    const { setPequeno } = useSmall();
    
    return (
        <>
            <Container>
                <Left>
                    <Separator>
                        <BsList 
                            size={25} 
                            color="#FFF"
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={ () => {
                                const list = document.querySelector('#Lista')!;
                                list.classList.toggle('small');

                                const Small = document.querySelector('#Lista.small')!;

                                if(Small){
                                    setPequeno(true);
                                } else {
                                    setPequeno(false);
                                }
                            }}
                        />
                    </Separator>

                    <LogoMarca>
                        <Logo 
                            src="https://i.postimg.cc/Y0CHZf7s/oie-xb-Ik-JZfmwaqh.png"    
                        />
                        <Brasil>BR</Brasil>
                    </LogoMarca>
                </Left>

                <Center>
                    <InputIcon
                        id="inputicon"
                    >
                        <Pesquisar 
                            type="text"
                            placeholder="Pesquisar"
                        />

                        <FaKeyboard 
                            size={20} 
                            color="#FFF"
                            style={{
                                paddingLeft: 7.5, 
                                cursor: 'pointer'
                            }} 
                        />
                    </InputIcon>
    
                    <Search>
                        <AiOutlineSearch 
                            size={20} 
                            color="#9e9e9e"
                            style={{
                                cursor: 'pointer',
                            }}
                        />
                    </Search>
                </Center>

                <Right>
                    <Video 
                        size={28.5} 
                        color="#FFF" 
                    />
                    
                    <Grid 
                        size={22.5} 
                        color="#FFF" 
                    />

                    <Icon
                        onClick={() => {
                            setNotification(!Notification);
                        }}
                    >
                        <Bell 
                            size={22.5} 
                            color="#FFF" 
                        />
                    </Icon>
                    
                    <User 
                        src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg"
                        style={{
                            cursor: 'pointer',
                        }}
                    />
                </Right>
            </Container>

            {
                Notification? (
                    <Notificacao>
                        <HeaderNotificacao>
                            <HeaderTitle>Notificações</HeaderTitle>
                            <BsGearFill size={25} />
                        </HeaderNotificacao>
                        <Caixa>
                            {
                                Dados.Notificacao.map( (item) => {
                                    return(
                                        <Item
                                            key={item.Titulo}
                                        >
                                            <Link to="">
                                                <ChannelImage src={item.channelImage} />
                                                
                                                <Channel>
                                                    <b>{item.channel}</b> enviou um video {'  '}
                                                    {item.Titulo}
                                                </Channel>

                                                <Thumb src={item.image} />
                                            </Link>    
                                        </Item>
                                    );
                                })   
                            }

                            {
                                Dados.Notificacao.map( (item) => {
                                    return(
                                        <Item
                                        key={item.Titulo}
                                        >
                                            <Link to="">
                                                <ChannelImage src={item.channelImage} />
                                                
                                                <Channel>
                                                    <b>{item.channel}</b> enviou um video {'  '}
                                                    {item.Titulo}
                                                </Channel>

                                                <Thumb src={item.image} />
                                            </Link>    
                                        </Item>
                                    );
                                })
                            }

                            {
                                Dados.Notificacao.map( (item) => {
                                    return(
                                        <Item
                                            key={item.Titulo}
                                        >
                                            <Link to="">
                                                <ChannelImage src={item.channelImage} />
                                                
                                                <Channel>
                                                    <b>{item.channel}</b> enviou um video {'  '}
                                                    {item.Titulo}
                                                </Channel>

                                                <Thumb src={item.image} />
                                            </Link>    
                                        </Item>
                                    );
                                })
                            }
                        </Caixa>
                    </Notificacao>
                ) : null
            }
        </>
    );
}

export default Header;