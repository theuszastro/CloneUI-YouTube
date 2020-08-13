import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { GoChevronDown } from 'react-icons/go';

export const Container = styled.div`
    padding-bottom: 56px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    margin: 25px 20px 20px;
    padding-bottom: 10px;

    border-bottom: 5px solid var(--background-color-button);

    &.hide{
        display: none;
    }

    &.Esconder{
        padding-bottom: 40px;
    }

    &:last-child{
        margin-bottom: 40px;

        border: 0px;        
    }
`;

export const PreAnuncio = styled.h2`
    color: var(--white);
`;

export const Group = styled.div`
    width: 100%;

    padding: 5px 30px 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &.hide{
        display: none;
    }
`;

export const Close = styled(AiOutlineClose)`
    color: var(--gray-light);

    width: 150px;    
    height: 25px;

    cursor: pointer;

    &:hover{
        color: var(--white);
    }    
`;

export const MostrarMais = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(100% - 40px);
    height: 45px;

    margin: 20px 0px 0px 20px;

    cursor: pointer;

    position: absolute;
    bottom: 5px;

    &:hover{
        background-color: rgba(0, 0, 0, .15);
    }

    &.NaoMostrar{
        display: none;
    }
`;

export const IconBaixo = styled(GoChevronDown)`
    width: 25px;
    height: 25px;

    color: var(--gray-light);
`;

export const ContainerMais = styled.div`
    position: relative;
`;