import React from "react";
import { View,Text, Image } from "react-native";
import Navbar from "../components/navbar";
import logo from "../../assets/img/logo.png"

export default Main = ({navigation}) =>{

    return(

        <View>
        <Image source={logo} className="w-20 mt-10 mx-2"/>

        
        <Navbar/>
        </View>

    )

}