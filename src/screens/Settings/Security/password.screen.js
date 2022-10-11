import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../../styles/styles";

export default PasswordChange= ({navigation}) => {
    return(
        <View>
            <View style={{marginLeft: 30, marginTop: 40}}>
                <Text style={[styles['textBold'], styles['text-roboto'], {fontSize: 18}]}>Reset your password</Text>
                <Text style={[styles['text-roboto'], {color: '#8D8D8D',fontSize:16, fontWeight: '500'}]}>The harder the password, the safe</Text>
            </View>
            <View style={{margin: 20}}>
                <Text style={{color: '#8d8d8d', paddingLeft: 8}}>Current Password</Text>
            <Input
                placeholder="Enter current password"
                style={{padding: 15}}
            />
                <Text style={{color: '#8d8d8d', paddingLeft: 8}}>New Password</Text>
                <Input
                placeholder="Enter new password"
                style={{padding: 15}}
            />
                <Text style={{color: '#8d8d8d', paddingLeft: 8}}>Confirm Password</Text>
                <Input
                placeholder="Confirm new password"
                style={{padding: 15}}
            />
            <TouchableOpacity  style={{alignItems: "center", backgroundColor: "#8d8d8d", padding: 20, borderRadius: 5, marginTop: 80}}>
                <Text style={[{color: "#fff", fontSize:17}, styles["text-roboto"]]}>Confirm</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}