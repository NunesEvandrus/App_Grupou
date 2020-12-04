import React, {useState, useContext} from  'react';
import {Button, Text, Image, ActivityIndicator} from 'react-native';

import {UsuarioContext} from '../../contexts/user';

import {Container, Texto, ContainerButtons, Buttons, ButtonText } from './styles';

const Settings =() => {

    const {signOut} = useContext(UsuarioContext)

    return(
        <Container>
            <ContainerButtons>                    
                    <Buttons invert={true} onPress={()=>signOut()}>
                        <ButtonText invert={true}>Sair</ButtonText>
                    </Buttons>
                </ContainerButtons>
            
        </Container>
    )

}

export default Settings