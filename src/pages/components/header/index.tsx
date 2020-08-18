import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Dados from '../dados.json';
import { useSmall, useNotification, useOptions, useProfile } from '../../context';

import Switch from 'react-switch';

import { BsList, BsGearFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaKeyboard } from 'react-icons/fa';

import { 
    Container, 
    Separator, 
    Quantidade, 
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
    Thumb, 
    Config, 
    Mais, 
    Menos,
    Limpar,
    Perfil, 
    Parte,
    Label, 
    ProfileItem, 
    Separar, 
    FeedBackIcon, 
    HelpIcon, 
    ConfigIcon, 
    IrAte, 
    ProtegidoIcon, 
    LocalIcon, 
    IdiomaIcon, 
    TemaIcon, 
    SairIcon, 
    AlternarIcon,
    AssinaturaIcon, 
    ChannelIcon, 
    PerfilInfo, 
    PerfilImage, 
    Lado,
    PerfilNome, 
    PerfilEmail, 
    Gerenciar,
    TecladoIcon,
    ContainerTema,
    HeaderTema,
    Voltar,
    TemaTitle,
    Info,
    FooterTema,
    Title
} from './styles';

import { ThemeContext } from 'styled-components';

interface PropsHeader{
    ToggleTheme(): void;
}

const Header: React.FC<PropsHeader> = ({ ToggleTheme }) => {
    const { Notification, setNotification, NotificationNumber, setNotificationNumber } = useNotification(); 
    const { Options, setOptions } = useOptions(); 
    const { Tema, setTema, Profile, setProfile } = useProfile(); 
    const { setPequeno } = useSmall();

    const LogoDark = 'https://i.postimg.cc/Y0CHZf7s/oie-xb-Ik-JZfmwaqh.png';
    const LogoLight = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png';

    const theme = useContext(ThemeContext);

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
                onClick={() => {
                    Notification &&  setNotification(false);
                    Options && setOptions(false);                
                    Profile && setProfile(false);                
                    Tema && setTema(false);                
                }}
            >
                <Left>
                    <Separator>
                        <BsList 
                            size={25}
                            color={theme.colors.icons} 
                            style={{
                                cursor: 'pointer',
                            }}
                            onClick={List}
                        />
                    </Separator>

                    <LogoMarca>
                        <Link to="/">
                            <Logo 
                                src={theme.title === 'light'? LogoLight : LogoDark}   
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
                            color={theme.colors.icons}
                            style={{
                                paddingLeft: 7.5, 
                                cursor: 'pointer'
                            }}
                        />
                    </InputIcon>
                    
                    <Link to="/q=">
                        <Search>
                            <AiOutlineSearch 
                                size={20}
                                color={theme.colors.icons}
                                style={{
                                    cursor: 'pointer',
                                }}
                            />
                        </Search>
                    </Link>
                    
                </Center>

                <Right>
                    <Video size={28.5} color={theme.colors.icons} />
                    
                    <Grid size={22.5} color={theme.colors.icons} />

                    <Icon onClick={() => {
                        Profile && setProfile(false); 
                        setNotification(!Notification);
                    }}>
                        <Bell size={22.5} color={theme.colors.icons} />

                        <Quantidade 
                            className={NotificationNumber! > 0? 'Number' : ''}
                        >
                            <span style={
                                NotificationNumber! < 9? 
                                {position: 'absolute',top: -4, left: 19,}
                                : 
                                {position: 'absolute', top: -3, left: 17, fontSize: 11}
                            }>
                                {NotificationNumber! < 9? NotificationNumber : '9+' }
                            </span>
                        </Quantidade>
                    </Icon>
                    
                    <User
                        onClick={() => {
                            Notification && setNotification(false);

                            setProfile(true);
                        }}
                        src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg"
                        style={{
                            cursor: 'pointer',
                        }}
                    />
                </Right>
            </Container>

            {
                Notification? (
                    <Notificacao onClick={() => {}}>
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

                            <BsGearFill size={25} color={theme.colors.icons} />
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
                        </Caixa>
                    </Notificacao>
                ) : null
            }


            {
                Profile? (
                    <Perfil>
                        <PerfilInfo>
                            <PerfilImage src="https://cbie.ca/wp-content/uploads/2018/08/female-placeholder.jpg" />
                            <Lado>
                                <PerfilNome>Seila :P</PerfilNome>
                                <PerfilEmail>example@gmail.com</PerfilEmail>

                                <Gerenciar>Gerenciar sua Conta do Google</Gerenciar>
                            </Lado>
                        </PerfilInfo>

                        <Parte>
                            <ProfileItem>
                                <Separar>
                                    <ChannelIcon 
                                        size={25} 
                                    />
                                    <Label>Seu canal</Label>
                                </Separar>
                            </ProfileItem>
                            
                            <ProfileItem>
                                <Separar>
                                    <AssinaturaIcon 
                                        size={25} 
                                    />
                                    <Label>Assinaturas</Label>
                                </Separar>
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <ConfigIcon 
                                        size={25} 
                                    />
                                    <Label>YouTube Studio</Label>
                                </Separar>
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <AlternarIcon 
                                        size={25} 
                                    />
                                    <Label>Alternar conta</Label>
                                </Separar>

                                <IrAte 
                                    size={25} 
                                />
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <SairIcon 
                                        size={25} 
                                    />
                                    <Label>Sair</Label>
                                </Separar>
                            </ProfileItem>
                        </Parte>

                        <Parte>
                            <ProfileItem onClick={() => {
                                setProfile(false);
                                setTema(true);
                            }}>
                                <Separar>
                                    <TemaIcon 
                                        size={25} 
                                    />
                                    <Label>Tema: {theme.title === 'light'? 'Claro' : 'Escuro'}</Label>
                                </Separar>

                                <IrAte 
                                    size={25} 
                                />
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <IdiomaIcon 
                                        size={25} 
                                    />
                                    <Label>Idioma: Português</Label>
                                </Separar>

                                <IrAte 
                                    size={25} 
                                />
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <LocalIcon 
                                        size={25} 
                                    />
                                    <Label>Local: Brasil</Label>
                                </Separar>

                                <IrAte 
                                    size={25} 
                                />
                            </ProfileItem>
                            
                            <ProfileItem>
                                <Separar>
                                    <ConfigIcon 
                                        size={25} 
                                    />
                                    <Label>Configurações</Label>
                                </Separar>
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <ProtegidoIcon 
                                        size={25} 
                                    />
                                    <Label>Seus dados no YouTube</Label>
                                </Separar>
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <HelpIcon 
                                        size={25} 
                                    />
                                    <Label>Ajuda</Label>
                                </Separar>
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                    <FeedBackIcon 
                                        size={25} 
                                    />
                                    <Label>Enviar feedback</Label>
                                </Separar>
                            </ProfileItem>

                            <ProfileItem>
                                <Separar>
                                <TecladoIcon size={25} />
                                    <Label>Atalhos do Teclado</Label>
                                </Separar>
                            </ProfileItem>
                        </Parte>
                        
                        <Parte>
                            <Label className="Restrito" >Modo restito: desativado</Label>
                            <IrAte 
                                size={25} 
                            />
                        </Parte>
                    </Perfil>
                ) : null
            }

            {
                Tema? (
                    <ContainerTema>
                        <HeaderTema>
                            <Voltar 
                                size={25}
                                onClick={() => {
                                    setTema(false);
                                    setProfile(true);
                                }}
                            />
                            <TemaTitle>Tema</TemaTitle>
                        </HeaderTema>
                        <Info>
                            O Tema escuro escurece as partes claras da página para otimizar a experiência noturna. Confira!
                        </Info>

                        <Info>
                            A configuração do Tema escuro será aplicada somente a este navegador.
                        </Info>

                        <FooterTema>
                            <Title>
                                {theme.title === 'light'? 'TEMA CLARO' : 'TEMA ESCURO'}
                            </Title>

                            <Switch 
                                onChange={() => ToggleTheme()}
                                checked={theme.title === 'dark'}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                height={20}
                                width={60}
                                handleDiameter={25}
                                onHandleColor={theme.colors.like}
                                offHandleColor={theme.colors.icons}
                                offColor={theme.colors.button_border}
                                onColor={theme.colors.secondary}
                            />
                        </FooterTema>
                    </ContainerTema>
                ) : null
            }
        </>
    );
}

export default Header;