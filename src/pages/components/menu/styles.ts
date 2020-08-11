import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 56px;

    max-width: 240px;
    height: 92vh;

    padding-bottom: 20px;

    color: #fff;
    background-color: var(--gray-background);

    overflow: hidden;

    &:hover{
        overflow: auto;
    }

    &::-webkit-scrollbar {
        width: 12px;       
    }
  
    &::-webkit-scrollbar-track {
        background: var(--gray-background);        
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #e9e9e9;         
        border: 3px solid #e9e9e9;   
    }
`;

export const Principal = styled.ul`
    width: 240px;
    
    list-style: none;

    &.small{
        width: unset;

        article{
            border: 0;

            padding: 0px;
        }

        li{
            padding: 15px 0px;
            display: none;

            a{
                padding: 20px 25px;
            }
            
            p{
                font-size: 11.5px;
            }
        }

        li.show{
            display: block;
        }
        
        p.hide{
            display: none;
        }
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: center;

    cursor: pointer;

    color: var(--white);

    svg{
        color: var(--gray-light);
        flex-shrink: 0;
    }

    a{
        padding: 5px 25px;
    }

    &.active{
        background-color: var(--hover-gray);

        svg{
            color: var(--white);
        }
    }

    &.hide{
        display: none;
    }

    &:hover{
        background-color: var(--hover-gray);

        svg{
            color: var(--white);
        }
    }
`;

export const Label = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    font-size: 15px;
    text-align: center;
`;

export const Parte = styled.article`
    padding: 20px 0px;

    border-bottom: 1px solid var(--background-color-button);
`;

export const ContainerChannel = styled.div`
    display: flex;
    align-items: center;

    padding: 5px 0px 5px 25px;

    width: 77.5%;

    position: relative;

    &.new::after{
        content: '';

        width: 4px;
        height: 4px;

        background-color: var(--blue-dark);

        border-radius: 2px;

        margin-left: 25px;

        position: absolute;
        right: 0px;
    }
`;

export const HeaderTitle = styled.p`
    color: rgba(255, 255, 255, 0.5);

    margin: 0px 0px 10px 15px;

    font-weight: bold;
`;

export const ChannelImage = styled.img`
    width: 30px;
    height: 30px;

    border-radius: 50%; 
`;

export const ChannelNome = styled.p`
    padding: 0px 25px;

    font-size: 14px;
`;

export const FooterTitle = styled.p`
    font-size: 15px;

    color: var(--hover-gray);

    margin: 10px;
`;

