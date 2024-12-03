import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text , Button } from "react-native";

const Contador = ()=>{
    const [ count , setCount] = useState(0); 

    const incrementar = () =>{
        setCount(count +1);
    }
    const decrementar =() =>{
        setCount(count-1);
    }
    return(
        <View>
            <Text> Contador {count}</Text>
            <Button title="Incrementar" onPress={() => incrementar()}></Button>
            <Button title="Incrementar" onPress={() => decrementar()}></Button>
        </View>
        
    )

}
export default Contador;