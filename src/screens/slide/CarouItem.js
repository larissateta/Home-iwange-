import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";
import styles from "../../styles/styles";

export default function CarouItem ({item}){
    const { width }= useWindowDimensions();
    return(
        <View>
            <Image source={item.image} style={[styless.image, {width, resizeMode: 'contain'}]}/>

            <View style={{flex:0.3}}>
                <Text className="font-extrabold" style={[styles['text-roboto'], styless.description ]}>{item.description}</Text>
            </View>
        </View>
    )
}

const styless= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    description:{
        fontWeight: '300',
        textAlign: 'center',
        paddingHorizontal: 38
    }
})