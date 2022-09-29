import { Text, Image, View, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput, TextComponent } from "react-native";
import { NotifierWrapper, Notifier, NotifierComponents } from "react-native-notifier";
import logo from "../../../assets/img/logo.png"
import styles from '../../styles/styles';
import { Link } from "@react-navigation/native";


export default function Register({navigation}){
    return(
        <NotifierWrapper>
            <View >
                <Image source={logo} className="w-20 mt-10 mx-2"/>
                <Text className="text-2xl font-bold mx-auto mt-16 text-center"style={[styles['text-roboto']]}>Join us to start monitoring {'\n'}your home</Text>
                <View className="flex-row px-6 pt-7">
                    <TextInput
                        placeholder="Name"
                        className="mb-2 flex-1 text-black py-6 px-10 text-base rounded-mb"
                        style={[styles['app-shadow'],styles['text-roboto']]}
                    />
                </View>
                <View className="flex-row px-6 pt-0">
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
                <Text className="text-white text-base font-semibold text-center">  Join us </Text>
                </TouchableOpacity>
                
                <Text style={[styles['text-roboto']]} className="text-base text-center mt-8 pt-5">Have an account? <Link to={{ screen: 'Login' }} style={[styles['app-main-blue']]}>Login</Link></Text>
            </View>
        </NotifierWrapper>
    )
}