import styled from 'styled-components';
import { AiFillClockCircle } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { MdPlaylistPlay } from 'react-icons/md';
import { IoMdPlay } from 'react-icons/io';

export const Container = styled.div``;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 25px 0px 20px;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;

    border-radius: 25px;
`;

export const Nome = styled.h3`
    margin-left: 10px;
    color: ${props => props.theme.colors.label};

    &.channel{
        margin: 0px;

        color: ${props => props.theme.colors.icons};
    }
`;

export const Video = styled.div`
    width: 80%;

    margin: 15px 20px 30px;

    display: flex;

    cursor: pointer;
    
    padding-bottom: 20px;

    border-bottom: 1px solid ${props => props.theme.colors.button_border};

    &:hover{
        svg{
            display: block;
        }
    }
`;

export const Separator = styled.div`
    &.video{
        display: unset;

        position: relative;
    }

    &.info{
        display: unset;

        padding: 0px 20px;
    }

    &.desc{
        display: flex;
        align-items: center;
        flex-direction: row;
    }
`;

export const Thumb = styled.img`
    width: 250px;
    height: 150px;
`;

export const Duration = styled.p`
    padding: 2.5px;

    background-color: rgba(0, 0, 0, .8);

    position: absolute;
    bottom: 5px;
    right: 5px;
`;

export const Play = styled(IoMdPlay)`
    width: 30px;
    height: 30px;

    display: none;

    position: absolute;
    top: 40%;
    left: 45%;
`;

export const MaisTarde = styled(AiFillClockCircle)`
    background-color: rgba(0, 0, 0, .8);
    color: white;

    width: 20px;
    height: 20px;

    padding: 2.5px;

    display: none;

    position: absolute;
    top: 5px;
    right: 5px;
`;

export const PlayList = styled(MdPlaylistPlay)`
    background-color: rgba(0, 0, 0, .8);
    color: white;

    padding: 2.5px;

    width: 20px;
    height: 20px;

    display: none;

    position: absolute;
    top: 35px;
    right: 5px;
`;

export const Titulo = styled.h2`
    color: ${props => props.theme.colors.label};

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin-bottom: 1px;

    width: calc(892px - 250px - 20px);
`;

export const Verify = styled(GoVerified)`
    width: 15px;
    height: 15px;

    margin-left: 5px;

    color: ${props => props.theme.colors.icons};
`;

export const Descricao = styled.p`
    margin-top: 14px;

    color: ${props => props.theme.colors.icons};

    line-height: 25px;
    font-size: 17px;
`;

export const Visu = styled.p`
    color: ${props => props.theme.colors.icons};

    margin-left: 10px;
`;
