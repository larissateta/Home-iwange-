import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', height: 500} }>
            <Text
            // onPress={() => alert('This is the "HOME" screen')}
            style={{fontSize: 26, fontWeight: 'bold', color: 'red'}}
            >
                Home screen
            </Text>
        </View>
    )
}