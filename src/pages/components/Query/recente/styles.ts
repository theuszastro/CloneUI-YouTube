import styled from 'styled-components';

export const Container = styled.div`
    max-width: 80%;

    margin-bottom: 56px;
`;

export const Anuncio = styled.h2`
    margin-left: 25px;

    padding: 25px 0px;
`;

export const Separator = styled.div`
    margin-top: 20px;
`;

export const MostrarMais = styled.div`
    padding: 15px 0px;

    margin-left: 25px;

    cursor: pointer;

    font-size: 12.5px;
    font-weight: normal;

    border-bottom: 2px solid var(--background-color-button);

    color: var(--gray-light-text);

    &.remover{
        display: none;
    }

    &:hover{
        background-color: rgba(0, 0, 0, .1);
        color: var(--white);
    }
`;

export const Label = styled.h3`
    text-align: center;
`;