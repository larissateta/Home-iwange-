import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign"
import styles from "../../styles/styles"


export default Support = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 60, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Call us</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>+250 788 455 5678</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Email us</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>info@home.go.rw</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'space-between', width:'90%', flexDirection: 'row', paddingTop: 30, borderBottomColor: '#8D8D8D', borderBottomWidth: 1, marginLeft: 25, paddingBottom: 20}}>
                <View style={{paddingLeft: 10}}>
                    <Text style={[styles['textBold'],styles['text-roboto'], {fontSize: 18}]}>Talk to us</Text>
                    <Text style={[styles['textBold'], {color:'#8D8D8D'}]}>Send us a message.</Text>
                </View>
                <AntIcon name="right" size={18} color={'#4C93D4'} style={{paddingTop: 10}}/>
            </TouchableOpacity>
        </View>
    )
}
