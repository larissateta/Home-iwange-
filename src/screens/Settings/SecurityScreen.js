import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign"
import styles from "../../styles/styles"


export default Security = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 60, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Change your password</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Enable Fingerprint</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>Unlock with Fingerprint</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Manage your devices</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>Change your sign-in details and password.</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            </View>
    )
}
