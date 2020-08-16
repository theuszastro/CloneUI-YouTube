import React, { useState } from 'react';

import { Container, Flex, Image, Separator, Nome, Inscritos, Bio, Inscrever, Inscrito, Info, Verify, Videos, Bell, ChangeBell, Item, Label, Personalizado, Off } from './styles';

import { useOptions } from '../../../context';
import Dados from '../../dados.json';

const Channel: React.FC = () => {
    const item = Dados.AlanChannel;
    
    const [Subscript, setSubscript] = useState(false);
    const {Options, setOptions} = useOptions();
    
    const [BellZero, setBellZero] = useState(true);
    const [BellOne, setBellOne] = useState(false);
    const [BellTwo, setBellTwo] = useState(false);

    function reset(){
        setBellZero(false);
        setBellOne(false);
        setBellTwo(false);
    }

    return (
        <Container onClick={() => {
            if(Options) 
                setOptions(false);
        }}>
            <Flex>
                <Image src={item.image} />
                <Separator>
                    <Info>
                        <Nome>{item.nome}</Nome>
                        {item.verify && <Verify />}
                    </Info>

                    <Info>
                        <Inscritos>{item.inscritos}</Inscritos>
                        <Videos>{item.videos} vídeos</Videos>
                    </Info>

                    <Bio>{item.bio}</Bio>
                </Separator>

                {
                    Subscript? (
                        <Separator className="Inscrito">
                            <Inscrito onClick={() => {
                                if(Options)
                                    setOptions(false);

                                reset();
                                setBellZero(true);

                                setSubscript(false);
                            }}>
                                Inscrito
                            </Inscrito>

                            {BellZero && <Bell onClick={() => setOptions(!Options)} />}
                            {BellOne && <Personalizado onClick={() => setOptions(!Options)} />}
                            {BellTwo && <Off onClick={() => setOptions(!Options)} />}

                            {
                                Options && (
                                    <ChangeBell>
                                        <Item 
                                            className={BellZero!? 'Option active' : 'Option'}
                                            onClick={() => {
                                                reset();
                                                setBellZero(true);
                                                setOptions(false);
                                            }}
                                        >
                                            <Label>Todas</Label>
                                            <Bell />
                                        </Item>

                                        <Item 
                                            className={BellOne!? 'Option active' : 'Option'}
                                            onClick={() => {
                                                reset();
                                                setBellOne(true);
                                                setOptions(false);
                                            }}
                                        >
                                            <Label>Personalizadas</Label>
                                            <Personalizado />
                                        </Item>

                                        <Item 
                                            className={BellTwo!? 'Option active' : 'Option'}
                                            onClick={() => {
                                                reset();
                                                setBellTwo(true);
                                                setOptions(false);
                                            }}
                                        >
                                            <Label>Nenhuma</Label>
                                            <Off />
                                        </Item>
                                    </ChangeBell>
                                )
                            }
                        </Separator>
                    ) : (
                        <Inscrever onClick={() => setSubscript(true)}>
                            Inscreva-se
                        </Inscrever>
                    )
                }
            </Flex>
        </Container>
    );
}

export default Channel;