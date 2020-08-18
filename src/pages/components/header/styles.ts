import styled, { css } from 'styled-components';

import { GoOrganization } from 'react-icons/go';
import { FaKeyboard } from 'react-icons/fa';
import { IoIosLogIn, IoMdHelpCircle } from 'react-icons/io';
import { AiFillDollarCircle, AiOutlineGlobal } from 'react-icons/ai';
import { BsFillGrid3X3GapFill, BsFillBellFill, BsArrowLeft } from 'react-icons/bs';
import { MdChevronRight, MdSmsFailed, MdAccountBox, MdBrightness4, MdSettings,  MdVideoCall, MdSecurity } from 'react-icons/md';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.primary};

    width: 100%;
    height: 56px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0px;
    left: 0px;

    z-index: 999;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;

    a{
        display: flex;
        align-items: center;
    }
`;

export const Logo = styled.img`
    width: 80px;
    height: 24px;

    flex-shrink: 0;
    object-fit: scale-down;
`;

export const LogoMarca = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
`;

export const Brasil = styled.p`
    color: ${props => props.theme.colors.input_text};

    font-size: 9px;

    margin: -7px 0px 0px 2px;
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
`;

export const InputIcon = styled.div`
    border: 1px solid ${props => props.theme.colors.button_border};

    background-color: ${props => props.theme.colors.input_fundo};

    width: 575px;

    display: flex;
    align-items: center;

    &:focus-within{
        border: 1px solid ${props => props.theme.colors.like};
    }
`;

export const Pesquisar = styled.input`
    width: 531px;
    height: 28px;

    background-color: ${props => props.theme.colors.input_fundo};
    color: ${props => props.theme.colors.input_text};

    border: 0px;
    outline: 0;

    font-size: 17px;

    padding-left: 10px;
`;

export const Search = styled.button`
    width: 65px;
    height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: 1px solid ${props => props.theme.colors.button_border};
    border-left: 0px;
    border-radius: 0px 4px 4px 0px;

    outline: 0;

    background-color: ${props => props.theme.colors.button};
`;

export const Right = styled.div`
    display: flex;
    align-items: center;

    padding-right: 25px;
`;

export const Icon = styled.div`
    position: relative;
`;

export const Quantidade = styled.span`
    cursor: pointer;

    font-size: 14px;
    font-weight: bold;
    color: #fff;

    display: none;

    &.Number{
        display: block;
    }

    &.Number::before{
        content: '';

        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: red;
        color: var(--white);

        position: absolute;
        top: -7px;
        left: 12px;

        width: 17.5px;
        height: 17.5px;

        border: 2px solid ${props => props.theme.colors.primary};
        border-radius: 50%;
    }
`;

const IconCss = css`
    padding-right: 25px;
    cursor: pointer;
`;

export const Video = styled(MdVideoCall)`
    ${IconCss} 
`; 

export const Grid = styled(BsFillGrid3X3GapFill)`
    ${IconCss} 
`; 

export const Bell = styled(BsFillBellFill)`
    ${IconCss} 
`; 

export const User = styled.img`
    width: 35px;
    height: 35px;

    border-radius: 17.5px;

    max-height: 50px; 
`;

export const Separator = styled.div`
    margin: 0px 25px;
`;





                        // NOTIFICAÇÂO

export const Notificacao = styled.div`
    width: 480px;
    height: 634px;

    max-width: 480px;

    position: absolute;
    top: 48px;
    right: 75px;

    z-index: 99999999;

    background-color: ${props => props.theme.title === 'light'? '#fff' : props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.button_border};

    overflow: hidden;
    
    a{
        display: flex;
        align-items: center;
	    text-decoration: none;
    }

    &:hover{
        overflow: auto;
        overflow-x: hidden;
    }

    &::-webkit-scrollbar {
        width: 10px;       
    }
  
    &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.primary};  
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.button_border};         
    }

    @media(width: 1366px){
        top: 15px;
        right: 125px;
    }
`;

export const HeaderNotificacao = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 20px;

    border-bottom: 1px solid ${props => props.theme.colors.button_border};

    svg{
        color: ${props => props.theme.colors.input_text};

        cursor: pointer;
    }
`;

export const HeaderTitle = styled.h3`
    color: ${props => props.theme.colors.label};
`;

export const Caixa = styled.ul``;

export const Item = styled.li`
    list-style: none;

    width: 480px;
    max-width: 480px;

    display: flex;
    align-items: center;

    position: relative;

    padding: 10px 0px 15px 0px;

    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.liActive};

        color: ${props => props.theme.colors.iconsActive}
    }

    &::before{
        content: '';

        width: 6px;
        height: 6px;

        border-radius: 50%;

        background-color: var(--blue-dark);

        margin: 0px 10px 0px 15px;
    }
`;

export const Channel = styled.h4`
    color: ${props => props.theme.colors.label};

    font-size: 16px;
    font-weight: normal;
`;

export const ChannelImage = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 25px;

    margin-right: 15px;
`;

export const Thumb = styled.img`
    width: 60px;
    height: 50px;

    border-radius: 4px;

    margin-right: 40px;
    margin-left: 15px;
`;

const buttons = css`
    width: 60px;
    height: 30px;

    background-color: ${props => props.theme.colors.button};
    color: ${props => props.theme.colors.label};

    border: 0px;
`;

export const Config = styled.div`
    button + button{
        margin-left: 5px;
    }
`;

export const Mais = styled.button`
    ${buttons}
`;

export const Menos = styled.button`
    ${buttons}
`;

export const Limpar = styled.button`
    ${buttons}
`;

 


                        // PROFILE

export const Perfil = styled.div`
    width: 300px;
    max-width: 300px;
    min-height: 650px;
    max-height: 714px;

    background-color: ${props => props.theme.title === 'light'? '#FFF' : props.theme.colors.primary};

    border: 1px solid ${props => props.theme.colors.button_border};

    position: absolute;
    top: 48px;
    right: 25px;

    z-index: 9999;

    @media(width: 1366px){
        top: 10px;
        right: 70px;
    }
`;

export const Parte = styled.ul`
    border-bottom: 1px solid ${props => props.theme.colors.button_border};

    padding-bottom: 7.5px;
    margin: 7.5px 0px 0px;

    &:last-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        margin: 7px 0px 0px;
        border: 0px;
    }
`;

export const Label = styled.p`
    color: ${props => props.theme.colors.label};

    &.Restrito{
        padding-left: 16px;
    }
`;

export const ProfileItem = styled.li`
    list-style: none;

    cursor: pointer;

    padding: 7px 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        background-color: ${props => props.theme.colors.liActive};

        svg{
            color: ${props => props.theme.colors.label};
        }
    }
`;

export const Separar = styled.div`
    display: flex;
    align-items: center;
`;

export const PerfilInfo = styled.div`
    display: flex;

    padding: 20px 20px 15px;

    border-bottom: 1px solid ${props => props.theme.colors.button_border};
`;

export const PerfilImage = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 20px;
`;

export const Lado = styled.div`
    margin-left: 20px;
`;

export const PerfilNome = styled.h3`
    color: ${props => props.theme.colors.label};
`;

export const PerfilEmail = styled.p`
    color: ${props => props.theme.colors.label};

    margin-bottom: 10px;
`;

export const Gerenciar = styled.a`
    text-decoration: none;

    color: ${props =>  props.theme.colors.like};
    font-size: 15px;

    margin-top: 10px;
`;

const CssIcon = css`
    margin: 0px 25px;

    color: ${props => props.theme.colors.icons};
`;

export const FeedBackIcon = styled(MdSmsFailed)`${CssIcon}`;
export const HelpIcon = styled(IoMdHelpCircle)`${CssIcon}`;
export const ConfigIcon = styled(MdSettings)`${CssIcon}`;
export const ProtegidoIcon = styled(MdSecurity)`${CssIcon}`;
export const LocalIcon = styled(AiOutlineGlobal)`${CssIcon}`;
export const IdiomaIcon = styled(AiOutlineGlobal)`${CssIcon}`;
export const TemaIcon = styled(MdBrightness4)`${CssIcon}`;
export const SairIcon = styled(IoIosLogIn)`${CssIcon}`;
export const AlternarIcon = styled(GoOrganization)`${CssIcon}`;
export const AssinaturaIcon = styled(AiFillDollarCircle)`${CssIcon}`;
export const ChannelIcon = styled(MdAccountBox)`${CssIcon}`;
export const IrAte = styled(MdChevronRight)`${CssIcon}`;
export const TecladoIcon = styled(FaKeyboard)`${CssIcon}`;




                                    // TEMA 

export const ContainerTema = styled.div`
    position: absolute;
    top: 48px;
    right: 25px;

    z-index: 999;

    background-color: ${props => props.theme.title === 'light'? '#FFF' : props.theme.colors.primary};

    border: 1px solid ${props => props.theme.colors.button_border};

    width: 300px;
    max-width: 300px;
`;

export const HeaderTema = styled.div`
    display: flex;
    align-items: center;

    padding: 10px 10px;

    border-bottom: 1px solid ${props => props.theme.colors.button_border};
`;

export const Voltar = styled(BsArrowLeft)`
    color: ${props => props.theme.title === 'light'? props.theme.colors.icons : '#FFF'};

    cursor: pointer;
`;

export const TemaTitle = styled.h3`
    color: ${props => props.theme.colors.label};

    margin-left: 15px;
`;

export const Info = styled.p`
    padding: 10px 20px;

    line-height: 21px;

    color: ${props => props.theme.colors.label};

    &:last-child{
        margin: -5px 0px 5px;
    }
`;

export const FooterTema = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
`;

export const Title = styled.p`
    color: ${props => props.theme.colors.icons};
`;
