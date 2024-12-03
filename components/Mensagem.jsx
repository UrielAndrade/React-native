import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text , Button } from "react-native";

const Mensagem =() =>{
    const [mensagem, setMensagem, ] = useState('Carregando dados...');

    useEffect(()=>{
        const time = setTimeout(() => {setMensagem('Bem vindo, jogador!')}, 3000);
    }, []);

    return(
    <view>
        <Text>{mensagem}</Text>
    </view>
    )
}
export default Mensagem;