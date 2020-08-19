import React, { useEffect,  } from 'react';

import { useStyle } from '../../../context';

import Dados from '../../dados.json';

import VideoChannel from '../../Home/video';
import VideoHorizontal from '../horizontal';

import { Container, Header, Label, Separator, GridIcon, ListIcon } from './styles';

const Grid: React.FC = () => {
  const { ListStyle, setListStyle } = useStyle();

  useEffect(() => {
    const IconsSub = document.querySelectorAll('.iconsSub')!;

    IconsSub.forEach((value, index) => {
      IconsSub[index].addEventListener('click', () => {
  
        if(IconsSub[index].classList[3] === 'activeIcon')
          return;
  
        IconsSub.forEach((key, position) => {
          IconsSub[position].classList.remove('activeIcon');
        });
        
        if(index === 0){
          const style = localStorage.getItem('style');

          if(style !== 'grid')
            localStorage.setItem('style', 'grid');

          setListStyle('grid');
        }
           
        if(index === 1){
          const style = localStorage.getItem('style');

          if(style !== 'lista')
            localStorage.setItem('style', 'lista');
            
          setListStyle('lista');
        }
  
        IconsSub[index].classList.add('activeIcon');
      })
    })
  });

  return (
    <>
      {
        ListStyle === 'grid'?  (
          <Header>
            <Label>Hoje</Label>

            <Separator>
              <Label className="Gerenciar">GERENCIAR</Label>
              <GridIcon 
                className="iconsSub activeIcon" 
              />
              <ListIcon 
                className="iconsSub" 
              />
            </Separator>
          </Header>
        ) : null
      }
    {
      ListStyle === 'grid'? (
        <Container>
          {
            Dados.VideosOito.map((item, index) => (
              <VideoChannel
                key={2 * index}
                titulo={item.titulo}
                channel={item.channel}
                channelImage={item.channelImage}
                channelVerify={item.channelVerify}
                visualizacoes={item.visualizacoes}
                duration={item.duration}
                thumb={item.thumb}
                isSmall={false}
              />
            ))
          }
          {
            Dados.VideosOito.map((item, index) => (
              <VideoChannel
                key={3 * index}
                titulo={item.titulo}
                channel={item.channel}
                channelImage={item.channelImage}
                channelVerify={item.channelVerify}
                visualizacoes={item.visualizacoes}
                duration={item.duration}
                thumb={item.thumb}
                isSmall={false}
              />
            ))
          }
          {
            Dados.VideosOito.map((item, index) => (
              <VideoChannel
                key={1 * index}
                titulo={item.titulo}
                channel={item.channel}
                channelImage={item.channelImage}
                channelVerify={item.channelVerify}
                visualizacoes={item.visualizacoes}
                duration={item.duration}
                thumb={item.thumb}
                isSmall={false}
              />
            ))
          }
        </Container>
      ) : (
        <Container className="sem">
          {
            Dados.VideosOito.map((item, index) => {
              return (
                <VideoHorizontal 
                  key={4 * index} 
                  title={item.titulo}
                  nome={item.channel}
                  image={item.channelImage}
                  verify={item.channelVerify}
                  views={item.visualizacoes[0]}
                  duration={item.duration}
                  thumb={item.thumb}
                  descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ligula lectus. Nunc sollicitudin ante mauris, pulvinar pretium magna fermentum eget. Maecenas ut egestas turpis. Proin a auctor leo. Maecenas egestas eros urna, in rutrum orci aliquam vel. Integer bibendum ultricies lectus, nec scelerisque turpis feugiat bibendum. Cras vitae tempor erat. Aenean aliquam et augue quis pulvinar. Cras fermentum dictum velit et iaculis. Integer nulla arcu, ornare a euismod non, mattis quis sapien."
                >
                  {
                    index === 0? (
                      <Separator>
                        <Label className="Gerenciar">GERENCIAR</Label>
                        <GridIcon className={ListStyle === 'grid'? 'iconsSub activeIcon' : 'iconsSub'} />
                        <ListIcon className={ListStyle === 'lista'? 'iconsSub activeIcon' : 'iconsSub'} />
                      </Separator>
                    ) : null
                  }
                  
                </VideoHorizontal>
              );
            })
          }

          {
            Dados.VideosOito.map((item, index) => {
              return (
                <VideoHorizontal
                  key={5 * index} 
                  title={item.titulo}
                  nome={item.channel}
                  image={item.channelImage}
                  verify={item.channelVerify}
                  views={item.visualizacoes[0]}
                  duration={item.duration}
                  thumb={item.thumb}
                  descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ligula lectus. Nunc sollicitudin ante mauris, pulvinar pretium magna fermentum eget. Maecenas ut egestas turpis. Proin a auctor leo. Maecenas egestas eros urna, in rutrum orci aliquam vel. Integer bibendum ultricies lectus, nec scelerisque turpis feugiat bibendum. Cras vitae tempor erat. Aenean aliquam et augue quis pulvinar. Cras fermentum dictum velit et iaculis. Integer nulla arcu, ornare a euismod non, mattis quis sapien."
                />
              )
            })
          }
          
          {
            Dados.VideosOito.map((item, index) => {
              return (
                <VideoHorizontal
                  key={6 * index} 
                  title={item.titulo}
                  nome={item.channel}
                  image={item.channelImage}
                  verify={item.channelVerify}
                  views={item.visualizacoes[0]}
                  duration={item.duration}
                  thumb={item.thumb}
                  descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ligula lectus. Nunc sollicitudin ante mauris, pulvinar pretium magna fermentum eget. Maecenas ut egestas turpis. Proin a auctor leo. Maecenas egestas eros urna, in rutrum orci aliquam vel. Integer bibendum ultricies lectus, nec scelerisque turpis feugiat bibendum. Cras vitae tempor erat. Aenean aliquam et augue quis pulvinar. Cras fermentum dictum velit et iaculis. Integer nulla arcu, ornare a euismod non, mattis quis sapien."
                />
              )
            })
          }
        </Container>  
      )
    }
    </>
  );
}

export default Grid;