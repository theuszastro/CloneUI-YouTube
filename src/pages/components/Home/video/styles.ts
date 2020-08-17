import styled from 'styled-components';

import { AiFillClockCircle } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdPlaylistPlay } from 'react-icons/md';

export const Container = styled.div`
    max-width: 330px;
    min-width: 275px;

    font-family: 'Montserrat';

    flex: 1;

    cursor: pointer;

    &:hover{
        .icons{
            display: block;
        }
    }

    @media(width: 1366px){
        max-width: 305px;
        min-width: 260px;
    }
`;

export const Separator = styled.div`
    display: flex;

    &.SeparatorThumb{
        position: relative;

        height: 150px;        
    }

    &.info{
        padding-top: 5px;
    }

    &.Channel{
        padding-left: 55px;

        display: flex;
        align-items: center;
    }

    &.Channel + &.Channel{
        padding-top: 2.5px;
        padding-bottom: 25px;
    }

    &.aumentar{
        padding-top: 34px;
    }
`;

export const VideoThumb = styled.img`
    height: 150px;

    flex: 1;

    &.aumentar{
        height: 180px;
    }
`;

export const Duration = styled.p`
    position: absolute;
    bottom: 5px;
    right: 5px;

    padding: 2.5px;

    font-size: 15px;

    background-color: rgba(0, 0, 0, .8);
    color: #fff;

    &.aumentar{
        bottom: -25px;
        right: 5px;
    }
`;

export const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    
    border-radius: calc(40px / 2);

    margin: 8px;
`;

export const Titulo = styled.h3`
    font-weight: normal;
    font-size: 13.5px;
    
    line-height: 20px;

    margin-top: 8px;

    width: 200px;

    color: ${props => props.theme.colors.label};

    &.aumentar{
        width: 240px;

        font-size: 16px;
    }

    @media(width: 1366px){
        width: 176px;
    }
`;

export const ChannelNome = styled.h3`
    font-weight: 600;
    font-size: 13px;

    margin-right: 6.5px;

    color: ${props => props.theme.colors.icons};
`;

export const Visualizacao = styled.p`
    color: ${props => props.theme.colors.icons};
    
    font-size: 13px;
    font-weight: 500;
`;

export const Verificado = styled(GoVerified)`
    width: 12.5px;
    height: 12.5px;

    color: ${props => props.theme.colors.icons};
`;

export const MaisTarde = styled(AiFillClockCircle)`
    padding: 2.5px;

    display: none;

    background-color: rgba(0, 0, 0, .8);
    color: #FFF;

    position: absolute;
    top: 5px;
    right: 5px;

    width: 20px;
    height: 20px;
`;

export const PlayList = styled(MdPlaylistPlay)`
    padding: 2.5px;

    display: none;

    background-color: rgba(0, 0, 0, .8);
    color: #FFF;

    position: absolute;
    top: 38px;
    right: 5px;

    height: 20px;
    width: 20px;
`;

export const TresPontos = styled(BsThreeDotsVertical)`
    width: 15px;
    height: 20px;

    color: ${props => props.theme.colors.icons};

    padding: 8px 0px;
    margin-left: 9px;

    display: none;

    &.aumentar{
        margin-left: 8px;
    }
`;