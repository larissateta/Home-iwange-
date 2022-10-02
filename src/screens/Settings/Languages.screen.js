import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import styles from "../../styles/styles";

export default Language = ({navigation}) => {
    const [English, setEnglish]= useState(false);
    const [French, setFrench]= useState(false);
    const [Kinya, setKinya]= useState(false);
    const [Swahili, setSwahili]= useState(false);

    const languageEng =()=>{
        setEnglish(true);
        setFrench(false);
        setKinya(false);
        setSwahili(false);
    }
    const languageFr =()=>{
        setEnglish(false);
        setFrench(true);
        setKinya(false);
        setSwahili(false);
    }
    const languageKinya =()=>{
        setEnglish(false);
        setFrench(false);
        setKinya(true);
        setSwahili(false);
    }
    const languageSwahili =()=>{
        setEnglish(false);
        setFrench(false);
        setKinya(false);
        setSwahili(true);
    }
    return(
        <View>
            <Text style={[styles['textBold'], styles['text-roboto'], {fontSize: 18, paddingTop: 40, paddingLeft: 30}]}>Select a language</Text>
                
                    <CheckBox
                        title={'English'}
                        checked={English}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={languageEng}
                    />
                
                <View>
                    <CheckBox
                        title={'Francais'}
                        checked={French}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={languageFr}
                    />
                </View>
            
                <View>
                    <CheckBox
                        title={'Kinyarwanda'}
                        checked={Kinya}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={languageKinya}
                    />
                </View>
            
            
                <View>
                    <CheckBox
                        title={'Kiswahili'}
                        checked={Swahili}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={languageSwahili}
                    />
                </View>
        </View>
    )
}