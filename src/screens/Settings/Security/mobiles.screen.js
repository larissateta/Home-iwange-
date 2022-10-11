import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../styles/styles";


export default Mobile = ({navigation}) => {
    return(
        <View>
            <Text  style={[styles['textBold'], styles['text-roboto'],{fontSize: 20, paddingLeft: 20, paddingTop: 20}]}>Which device would you like to remove? </Text>
            <Text style={[styles['textBold'], {color:'#8D8D8D', paddingLeft: 20, paddingRight: 20, paddingTop: 10}]}>Choose the device you want to remove. To connect it again, simply sign in to your profile using that device</Text>
            <TouchableOpacity style={[{backgroundColor: "#d9d7d7", paddingLeft: 25, paddingTop: 20, margin: 20, height: 130, borderRadius: 5}]}>
                <Text>iPhone</Text>
                <Text>Active</Text>
                <Text>02 Sep 2022 10:55 AM</Text>
            </TouchableOpacity>
        </View>
    )
}
