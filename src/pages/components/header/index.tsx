import React from 'react';

import { Link } from 'react-router-dom';
import Dados from '../dados.json';
import { useSmall, useNotification } from '../../context';

import { BsList, BsGearFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaKeyboard } from 'react-icons/fa';

import { Container, Separator, Quantidade, Left, Logo, LogoMarca, Brasil, Center, InputIcon, Pesquisar, Search, Right,  Icon, Video, Grid, Bell, User, Notificacao, HeaderNotificacao, HeaderTitle, Caixa, Item, Channel, ChannelImage, Thumb, Config, Mais, Menos, Limpar } from './styles';

const Header: React.FC = () => {
    const { Notification, setNotification, NotificationNumber, setNotificationNumber } = useNotification();
    const { setPequeno } = useSmall();
    
    function List(){
        const list = document.querySelector('#Lista')!;
        list.classList.toggle('small');

        const Small = document.querySelector('#Lista.small')!;

        if(Small){
            setPequeno(true);
        } else {
            setPequeno(false);
        }
    }

    return (
        <>
            <Container
                onClick={() => Notification &&  setNotification(false)}
            >
                <Left>
                    <Separator>
                        <BsList 
                            size={25} 
                            color="#FFF"
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={List}
                        />
                    </Separator>

                    <LogoMarca>
                        <Link to="/">
                            <Logo 
                                src="https://i.postimg.cc/Y0CHZf7s/oie-xb-Ik-JZfmwaqh.png"    
                            />
                            <Brasil>BR</Brasil>
                        </Link>
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
                        <Link to="/q=">
                            <AiOutlineSearch 
                                size={20} 
                                color="#9e9e9e"
                                style={{
                                    cursor: 'pointer',
                                }}
                            />
                        </Link>
                    </Search>
                </Center>

                <Right>
                    <Video size={28.5} color="#FFF"/>
                    
                    <Grid size={22.5} color="#FFF" />

                    <Icon onClick={() =>  setNotification(!Notification)}>
                        <Bell size={22.5} color="#FFF" />

                        <Quantidade 
                            className={NotificationNumber! > 0? 'Number' : ''}
                        >
                            <span style={
                                NotificationNumber! < 9? 
                                {position: 'absolute',top: -4,left: 19,}
                                : 
                                {position: 'absolute', top: -3,left: 17,fontSize: 11}
                            }>
                                {NotificationNumber! < 9? NotificationNumber : '9+' }
                            </span>
                        </Quantidade>
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
                    <Notificacao
                        onClick={() => {}}
                    >
                        <HeaderNotificacao>
                            <HeaderTitle>Notificações</HeaderTitle>

                            <Config>
                                <Mais onClick={() => setNotificationNumber(NotificationNumber! + 1)}>
                                    +1
                                </Mais>

                                <Menos
                                    onClick={() => {
                                        if(NotificationNumber === 0)
                                            return;

                                        setNotificationNumber(NotificationNumber! - 1);
                                    }}
                                >
                                    -1
                                </Menos>

                                <Limpar onClick={() => setNotificationNumber(0)}>
                                    Limpar
                                </Limpar>
                            </Config>

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