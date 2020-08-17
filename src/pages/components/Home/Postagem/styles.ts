import styled from 'styled-components';
import { AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdInsertComment } from 'react-icons/md';

export const Post = styled.div`
    background-color: ${props => props.theme.colors.primary};

    border: 1px solid ${props => props.theme.colors.button_border};

    max-width: 500px;
    height: 220px;

    font-family: 'Montserrat';

    position: relative;
`;

export const Separator = styled.div`
    display: flex;
    align-items: center;
`;

export const ChannelImage = styled.img`
    width: 30px;
    height: 30px;

    margin: 15px 0px 15px 20px;

    border-radius: 15px;
`;

export const ChannelNome = styled.h3`
    color: ${props => props.theme.colors.icons};

    font-size: 14.5px;

    margin-left: 10px;
`;

export const PostagemConteudo = styled.p`
    width: 50%;

    margin: 0px 3% 0px 5%;

    font-size: 13px;

    color: ${props => props.theme.colors.label};
`;

export const PostagemImage = styled.img`
    max-width: 150px;
    height: 100px;

    margin-right: 20px;

    border-radius: 4px;
`;

export const PostagemLike = styled(AiTwotoneLike)`
    width: 20px;
    height: 20px;

    margin-right: 5px;

    color: ${props => props.theme.colors.icons};

    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.label};
    }

    &.active{
        color: var(--blue-dark);
    }
`;

export const PostagemLikeNumber = styled.p`
    color: ${props => props.theme.colors.icons};
`;

export const PostagemDislike = styled(AiTwotoneDislike)`
    width: 20px;
    height: 20px;

    margin-left: 10px;

    color: ${props => props.theme.colors.icons};

    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.label};
    }

    &.active{
        color: var(--blue-dark);
    }
`;

export const PostagemComments = styled(MdInsertComment)`
    width: 20px;
    height: 20px;

    margin-right: 5px;

    color: ${props => props.theme.colors.icons};

    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.label};
    }
`;

export const PostagemCommentsNumber = styled.p`
    color: ${props => props.theme.colors.icons};
`;

export const PostagemReport = styled(BsThreeDotsVertical)`
    margin-left: 10px;

    color: ${props => props.theme.colors.icons};

    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.label};
    }
`;

export const Conteudo = styled.div`
    display: flex;
    
    max-height: 100px;
`;

export const Grupo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &.Conteudo{
        align-items: unset;
        justify-content: space-between;

        width: 100%;
    }
`;

export const Feedback = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 89%;
    height: 30px;

    position: absolute;
    bottom: 15px;

    margin-left: calc(15% / 2);
`;
