import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import styles from "../../../styles/styles";


export default ManageDevices = ({navigation}) =>{
    return(
        <View>
            <Text  style={[styles['textBold'], styles['text-roboto'],{fontSize: 20, paddingLeft: 20, paddingTop: 20}]}>Select the devices you want to manage</Text>
            <Text style={[styles['textBold'], {color:'#8D8D8D', paddingLeft: 20, paddingRight: 20, paddingTop: 10}]}>You can remove any of the devices connected to your profile. You can link a maximum of 3 devises.</Text>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}} onPress={()=> navigation.navigate("Mobile Devices")}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Mobile device</Text> 
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>1 device</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
        </View>
    )
}