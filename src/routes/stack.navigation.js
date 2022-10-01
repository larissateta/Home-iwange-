import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Register from "../screens/auth/Register.screen";
import Login from "../screens/auth/Login.screen";
import CarouScreen from "../screens/slide/Carou.screen";
import Main from "../screens/main";
import Security from "../screens/Settings/SecurityScreen";
import Settings from "../screens/Settings/Settings.screen"
import Support from "../screens/Settings/Support.screen"

const stack = createStackNavigator();

const StackNavigation = ()=>{
    return(
        <NavigationContainer independent={true}>
            <stack.Navigator>

                <stack.Screen 
                    name="Register"
                    component={Register}   
                    options={{
                        headerShown: false
                    }}
                />
                <stack.Screen 
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <stack.Screen 
                    name="CarouScreen"
                    component={CarouScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <stack.Screen
                    name="MainScreen"
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />
                <stack.Screen
                    name="Security"
                    component={Security}
                />
                <stack.Screen 
                    name="Settings"
                    component={Settings}
                    options={{
                        headerShown: false
                    }}
                />
                <stack.Screen
                    name="Support"
                    component={Support}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation