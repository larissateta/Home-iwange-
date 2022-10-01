import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import logo from '../../../assets/img/logo.png'
import styles from "../../styles/styles";

export default Settings = ({navigation}) =>{
    return(
        <View>
        <Image source={logo} className="w-20 mt-10 mx-2"/>

            <Text style={[styles['textBold'], styles['text-roboto'],{fontSize: 18, paddingLeft: 30, paddingTop: 20}]}>Larissa Teta</Text>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}} onPress={()=> navigation.navigate('Security')}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Security</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>Change your sign-in details and password.</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 20, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}} onPress= {()=> navigation.navigate('Support')}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Support</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>Email, Call or find us on social media</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 20, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Change language</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>

            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Sign out</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}