import styled from 'styled-components';

import { AiFillClockCircle } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdPlaylistPlay } from 'react-icons/md';

export const Movie = styled.div`
    display: flex;

    margin-left: 25px;

    font-family: 'Montserrat';

    cursor: pointer;

    &{
       margin-bottom: 10px;
    }

    &:hover{
        .icon{
            display: block;
        }
    }

    &.hidden{
        display: none;
    }

    &.ocultar{
        display: none;
    }
`;

export const Thumb = styled.div`
    position: relative;
`;

export const Image = styled.img`
    width: 275px;
    height: 150px;
`;

export const Duration = styled.p`
    position: absolute;
    bottom: 5px;
    right: 5px;

    padding: 2.5px;

    font-size: 15px;

    background-color: rgba(0, 0, 0, .8);
`;

export const Assistir = styled(AiFillClockCircle)`
    padding: 2.5px;

    display: none;

    background-color: rgba(0, 0, 0, .8);

    position: absolute;
    top: 5px;
    right: 5px;

    width: 20px;
    height: 20px;
`;

export const Playlist = styled(MdPlaylistPlay)`
    padding: 2.5px;

    display: none;

    background-color: rgba(0, 0, 0, .8);

    position: absolute;
    top: 38px;
    right: 5px;

    height: 20px;
    width: 20px;
`;

export const Details = styled.div`
    color: var(--gray-light-text);
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5px;
`;

export const Titulo = styled.h2`
    font-size: 16.5px;

    padding: 0px 20px;

    color: var(--white);

    width: 80%;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

export const TresPontos = styled(BsThreeDotsVertical)`
    width: 15px;
    height: 20px;

    color: var(--gray-light);

    margin-left: 9px;

    display: none;
`;

export const Channel = styled.p`
    padding-left: 20px;

    font-size: 15px;
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 15px;
`;

export const Verify = styled(GoVerified)`
    width: 12.5px;
    height: 12.5px;

    margin-left: 5px;

    color: var(--gray-light);
`; 

export const Views = styled.p`
    padding-left: 7px;
`;

export const Description = styled.p`
    padding-left: 20px;

    font-size: 14.5px;
`;

export const Novo = styled.p`
    padding: 2.5px 0px 2.5px 5px;

    margin: 30px 0px 0px 20px;

    width: 45px;
    height: 15px;

    font-size: 12.5px;

    background-color: var(--background-color-button);
    color: var(--gray-light-text);
`;