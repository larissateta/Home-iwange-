import React from "react";
import { View, Text, Dimensions} from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack"

//Screens
import HomeScreen from "../screens/Home.screen";
import SettingScreen from "../screens/Settings.screen";
import SwitchesScreen from "../screens/Switches.screen";

//Screen names

const home= 'HomeScreen';
const settings= 'SettingScreen';
const switches = 'SwitchesScreen';

const Stack = createStackNavigator();

const fullScreenWidth = Dimensions.get('window').width;

function HomeStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={home} component={HomeScreen}/>
        </Stack.Navigator>
    )
}
function SettingsStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={settings} component={SettingScreen}/>
        </Stack.Navigator>
    )
}
function SwitchesStackScreen(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={switches} component={SwitchesScreen}/>
        </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();

export default Navbar = (props)=>{
    
    return(

        <NavigationContainer independent={true}>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  let rn = route.name;
      
                  if (rn === home) {
                    iconName = focused ? 'home' : 'home-outline';
      
                  } else if (rn === switches) {
                    iconName = focused ? 'bulb' : 'bulb-outline';
      
                  } else if (rn === settings) {
                    iconName = focused ? 'settings' : 'settings-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
            >

                <Tab.Screen name={home} component={HomeStackScreen} />
                <Tab.Screen name={switches} component={SwitchesStackScreen} />
                <Tab.Screen name={settings} component={SettingsStackScreen} />
                
            </Tab.Navigator>
        </NavigationContainer>

    )

}