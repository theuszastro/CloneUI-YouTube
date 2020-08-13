import styled from 'styled-components';

export const Postagens = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin: 20px 20px 0px;

    padding-bottom: 65px;

    border-bottom: 5px solid var(--background-color-button);

    &.remove{
        padding-bottom: 25px;
    }
`;

export const MaisPostagem = styled.div`
    position: relative;
`;

export const MostrarPostagem = styled.div`
    width: calc(100% - 40px);
    height: 45px;

    position: absolute;
    left: 20px;
    bottom: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &.hide{
        display: none;
    }

    &:hover{
        background-color: rgba(0, 0, 0, .15);
    }
`;
