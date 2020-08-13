import React, { useState } from 'react';

import { Container, Grid, PreAnuncio, Group, Close, MostrarMais, IconBaixo, ContainerMais } from './styles';

import Dados from '../dados.json';
import ChannelVideo from '../video';

import { useSmall } from '../../context';

const VideosGrid: React.FC = () => {
  const { Pequeno } = useSmall();
  const [Mostrar, setMostrar] = useState(false);

  return (
    <Container>
      <Grid>
        {
            Dados.VideosOito.map(item => (
                <ChannelVideo 
                    key={item.titulo}
                    titulo={item.titulo}
                    channel={item.channel} 
                    channelImage={item.channelImage} 
                    channelVerify={item.channelVerify} 
                    visualizacoes={item.visualizacoes}
                    duration={item.duration} 
                    thumb={item.thumb}
                    isSmall={Pequeno? true : false}
                />
            ))
        }
      </Grid>

      <ContainerMais>
          <Group
              className="Esconder"
          >
              <PreAnuncio>Principais notícias</PreAnuncio>
              <Close 
                  onClick={() => {
                      const Esconder = document.querySelectorAll('.Esconder');

                      Esconder.forEach((key: any, value: number) => {
                          Esconder[value].classList.add('hide');
                      });
                  }} 
              />
          </Group>
          
          <Grid
              className="Esconder"
              id="Esconder"
          >
              {
                  Dados.VideosQuatro.map(item => (
                      <ChannelVideo 
                          key={item.titulo}
                          titulo={item.titulo}
                          channel={item.channel} 
                          channelImage={item.channelImage} 
                          channelVerify={item.channelVerify} 
                          visualizacoes={item.visualizacoes}
                          duration={item.duration} 
                          thumb={item.thumb}
                          isSmall={Pequeno? true : false}
                      />
                  ))
              }
              
              {
                  Mostrar && (
                      Dados.VideosOito.map(item => (
                          <ChannelVideo 
                              key={item.titulo}
                              titulo={item.titulo}
                              channel={item.channel} 
                              channelImage={item.channelImage} 
                              channelVerify={item.channelVerify} 
                              visualizacoes={item.visualizacoes}
                              duration={item.duration} 
                              thumb={item.thumb}
                              isSmall={Pequeno? true : false}
                          />
                      ))
                  )
              }
          </Grid>

          <MostrarMais
              className="mostrar"
              onClick={() => {
                  const MaisMostrar = document.querySelector('.mostrar')!;
                  const GridMostrar = document.querySelector('#Esconder')!;

                  setMostrar(true);

                  MaisMostrar.classList.add('NaoMostrar');
                  GridMostrar.classList.remove('Esconder');
              }}
          >
              <IconBaixo />
          </MostrarMais>
      </ContainerMais>

      <Grid>    
          {
              Dados.VideosQuatro.map(item => (
                  <ChannelVideo 
                      key={item.titulo}
                      titulo={item.titulo}
                      channel={item.channel} 
                      channelImage={item.channelImage} 
                      channelVerify={item.channelVerify} 
                      visualizacoes={item.visualizacoes}
                      duration={item.duration} 
                      thumb={item.thumb}
                      isSmall={Pequeno? true : false}
                  />
              ))   
          }
      </Grid>
    </Container>
  );
}

export default VideosGrid;