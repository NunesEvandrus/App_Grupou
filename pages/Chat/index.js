import React, {useState, useContext, useEffect} from  'react';
import {Button, Text, Image, ActivityIndicator} from 'react-native';

import {UsuarioContext} from '../../contexts/user';

import {Container, Texto, Buttons, ContainerButtons, ButtonText, Input, ContainerMessages, Message } from './styles';

import firebase from 'firebase';
import 'firebase/firestore';

const Chat =() => {

    const[messages, setMessages] = useState([]);
    const[newMessage, setNewMessage] = useState("");

    const {user} = useContext(UsuarioContext)

    const ListenUpdateMessages = (snap)=>{
        const data = snap.docs.map(doc=>{
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        setMessages(data);
    }

    useEffect(() =>{
        const listener = firebase.firestore()
            .collection("mensagens").onSnapshot(ListenUpdateMessages)

    },[])

    const handleAddMessages = ()=>{
        if(newMessage == ""){
            console.warn('Preencha o campo')
            return
        }
        try
        {
            firebase.firestore().collection('mensagens').add({
                texto: newMessage,
                lida: false
            })
            setNewMessage("");
        }catch(err)
        {
            console.warn("erro de comunicação, tente mais tarde !");

        }
    }

    

    return(
        <Container>
            <ContainerMessages>
                {messages.map(message=>(
                    <Message key={message.id}>{message.texto}</Message>    
                ))}                
            </ContainerMessages>            
            <ContainerButtons>
                <Input onChangeText={text => setNewMessage(text)} value={newMessage}></Input>                   
                <Buttons invert={true} onPress={() => {handleAddMessages()}}>
                    <ButtonText invert={true}>Enviar</ButtonText>
                </Buttons>
            </ContainerButtons>    
        </Container>
    )

}

export default Chat