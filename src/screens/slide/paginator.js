import React from "react";
 import { View, Text, Animated, useWindowDimensions } from "react-native";
import styles from "../../styles/styles";

 export default function Paginator({data, scrollx}){
    
    const { width } = useWindowDimensions();

    return(

        <View style={[{height: 64}, {flexDirection: 'row'}]}>

            {data.map((_, i) => {
                const inputRange = [ (i - 1) * width, i * width, ( i + 1 ) * width ];

                const dotWidth= scrollx.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollx.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp' 
                })

                return <Animated.View style={[styles['dot'], {width: dotWidth , opacity}]} key={i.toString()}/>
            })}

        </View>
    )
 }