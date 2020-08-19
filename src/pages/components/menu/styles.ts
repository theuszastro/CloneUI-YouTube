import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 56px;

    max-width: 240px;
    height: 92vh;

    padding-bottom: 20px;

    font-family: 'Montserrat';
    font-size: 15px;
    color: #fff;

    background-color: ${props => props.theme.colors.primary};

    overflow: hidden;

    &:hover{
        overflow: auto;
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
            padding: 10px 0px;
            display: none;

            position: relative;

            a{
                padding: 15px 25px;
                display: block; 

                p {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                }

                p.First{
                    right: 21px;
                }
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

    color: ${props => props.theme.colors.label};

    svg{
        color: ${props => props.theme.colors.icons};
        flex-shrink: 0;
    }

    a{
        padding: 10px 25px;

        display: flex;
        align-items: center;

        text-decoration: none;

        color: ${props => props.theme.colors.label};

        p{
            margin-left: 25px;
        }
    }

    &.active{
        background-color: ${props => props.theme.colors.liActive};

        svg{
            color: ${props => props.theme.colors.iconsActive};
        }
    }

    &.hide{
        display: none;
    }

    &:hover{
        background-color: ${props => props.theme.colors.liActive};

        svg{
            color: ${props => props.theme.colors.iconsActive};
        }
    }
`;

export const Label = styled.p`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    font-size: 14px;
    text-align: center;
`;

export const Parte = styled.article`
    padding: 20px 0px;

    border-bottom: 1px solid ${props => props.theme.colors.button_border};
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
    color: ${props => props.theme.colors.label};

    margin: 0px 0px 10px 15px;

    font-size: 14px;
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

    color: ${props => props.theme.colors.liActive};

    margin: 10px;
`;

