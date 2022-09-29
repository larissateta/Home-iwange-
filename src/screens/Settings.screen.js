import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function SettingScreen({navigation}){
    return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text
            style={{fontSize: 26, fontWeight: 'bold'}}
            >
                Settings Screen
            </Text>
        </View>
    )
}