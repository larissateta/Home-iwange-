import { Text, Image, View, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput, TextComponent } from "react-native";
import { NotifierWrapper, Notifier, NotifierComponents } from "react-native-notifier";
import logo from "../../../assets/img/logo.png"
import styles from '../../styles/styles';
import { Link } from "@react-navigation/native";
import { useState } from "react";
// import { useValidation } from "react-native-form-validator"



export default function Login({navigation}){
  const [loading,setLoading] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [passwordHidden,setPasswordHidden] = useState(true);
  const [userData,setUserData] = useState({});
//   const { validate, isFieldInError, getErrorsInField, getErrorMessages,isFormValid} = useValidation({
//     state:{email,password}
//   })
    return(
        <NotifierWrapper>
            <View >
                <Image source={logo} className="w-20 mt-10 mx-2"/>
                <Text className="text-2xl font-bold mx-auto mt-16 text-center"style={[styles['text-roboto']]}>Welcome back</Text>
                <View className="flex-row px-6 pt-12">
                    <TextInput 
                        placeholder="Email"
                        className="mb-2 flex-1 text-black py-6 px-10 text-base rounded-mb"
                        style={[styles['app-shadow'],styles['text-roboto']]}
                    />
                </View>
                <View className="flex-row px-6 pt-0">
                    <TextInput 
                        placeholder="Password"
                        secureTextEntry
                        
                        className="mb-2 flex-1 text-black py-6 px-10 text-base rounded-mb"
                        style={[styles['app-shadow'],styles['text-roboto']]}

                    />
                </View>
                <TouchableOpacity
                    className="rounded-md py-3 mx-6 mt-8"
                    style={[styles['bg-main-blue']]}
                >
                    <Text className="text-white text-base font-semibold text-center">Login</Text>
                </TouchableOpacity>
                <Text style={[styles['text-roboto'],styles['app-main-blue']]} className="text-base text-center mt-5 font-bold ">Forgot Password?</Text>
                <Text style={[styles['text-roboto']]} className="text-base text-center mt-10 pt-12">Don't have an account? <Link to={{ screen: 'Settings' }} style={[styles['app-main-blue']]}>Sign up</Link></Text>
            </View>
        </NotifierWrapper>
    )
}