import React, {useState, useContext, useEffect} from  'react';
import {Button, Text, Image, ActivityIndicator} from 'react-native';

import {UsuarioContext} from '../../contexts/user';

import {Container, Texto, Buttons, ContainerButtons, ButtonText, Input, ContainerMessages, Message } from './styles';

import firebase from 'firebase';
import 'firebase/firestore';

const Chat =() => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
        date + '/' + month + '/' + year 
        + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    const[messages, setMessages] = useState([]);
    const[newMessage, setNewMessage] = useState("");
    const[professor, setProfessor] = useState("");

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
            .collection(user.email+'-mensagens').orderBy('data').onSnapshot(ListenUpdateMessages)

    },[])

    const handleAddMessages = ()=>{
        if(newMessage == ""){
            console.warn('Preencha o campo')
            return
        }
        try
        {
            //firebase.firestore().collection(professor+'-mensagens').add({
            firebase.firestore().collection(user.email+'-mensagens').add({
                data: currentDate,
                texto: newMessage,
                lida: false,
                aluno: user.email,
                professor: professor
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
                    <Message key={message.id}>{message.data} - {message.texto}</Message>    
                ))}                
            </ContainerMessages>            
            <ContainerButtons>
                <Input onChangeText={text => setNewMessage(text)} value={newMessage}></Input>                   
                {/* <Input onChangeText={text => setProfessor(text)} value={professor}></Input>                    */}
                <Buttons invert={true} onPress={() => {handleAddMessages()}}>
                    <ButtonText invert={true}>Enviar</ButtonText>
                </Buttons>
            </ContainerButtons>    
        </Container>
    )

}

export default Chat