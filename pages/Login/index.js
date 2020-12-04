import React, {useState, useContext} from  'react';
import {Button, Text, Image, ActivityIndicator} from 'react-native';


import {Container, Texto, CaixaLogin,
        Botao, BotaoTexto,
        ContainerBotoes, 
        Input, InputTexto, 
        ContainerButtons, 
        Buttons, ButtonText,
        ForgotPassword,
        Logo,
        CaixaTextoChamada, TextoChamada, TextoGrupou } from './styles';

import logoImg from '../../assets/logo.png';

import {UsuarioContext} from '../../contexts/user';
const Login =() => {

    const {signIn, signUp} = useContext(UsuarioContext);

    const [currentButton, setCurrentButton] = useState('professor');
    const [email, setEmail] = useState("enunes@evandro.com.br");
    const [password, setPassword] = useState("12345678");
    const [carregando, setCarregando] = useState(false);

    function handleSignIn(){        

        try{
            signIn(email, password)
        }catch(err){
            console.warn(err);
        }       
        
    }
    function handleSignUp(){        
        setCarregando(true);

        try{
            signUp(email, password)
        }catch(err){
            console.warn(err);
        }finally
        {
            setCarregando(false);
        }



    }

    return(
        <Container>
            <Logo>
                <Image source={logoImg} style={{width: 300, height:100}} />

            </Logo>
            {/* <CaixaTextoChamada>
                <TextoChamada>
                    Problemas para forma
                </TextoChamada>
                <TextoChamada>
                    um grupo de trabalho
                </TextoChamada>
                <TextoChamada>
                    O <TextoGrupou>Grupou!</TextoGrupou> resolve!
                </TextoChamada>
            </CaixaTextoChamada> */}


            <CaixaLogin>
                <ContainerBotoes>
                    <Botao onPress={()=>{setCurrentButton('aluno')}} lastClick={currentButton =='aluno' ? true : false}>
                        <BotaoTexto lastClick={currentButton =='aluno' ? true : false}>
                            Aluno
                        </BotaoTexto>
                    </Botao>
                    <Botao onPress={()=>{setCurrentButton('professor')}} lastClick={currentButton =='professor' ? true : false}>
                        <BotaoTexto lastClick={currentButton =='professor' ? true : false}>
                            Professor
                        </BotaoTexto>
                    </Botao>
                </ContainerBotoes>
                <InputTexto>Email</InputTexto>
                <Input placeholder="Digite seu email" onChangeText={text => setEmail(text)} value={email}></Input>
                <InputTexto>Senha</InputTexto>
                <Input placeholder="Digite sua senha" onChangeText={text => setPassword(text)} secureTextEntry={true} value={password}></Input>
                <ForgotPassword>Esqueci minha senha.</ForgotPassword>
                <ContainerButtons>
                    <Buttons invert={true} onPress={()=>{handleSignUp()}}>
                        {carregando ? <ActivityIndicator color="#ae1b73"/> 
                        :
                            <ButtonText invert={true}>                                                            
                                Cadastre-se
                            </ButtonText>
                        }
                    </Buttons>
                    <Buttons invert={false} onPress={()=>{ handleSignIn()}}>
                        <ButtonText invert={false}>Entrar</ButtonText>
                    </Buttons>
                </ContainerButtons>
            </CaixaLogin>            

        </Container>
    )

}

export default Login