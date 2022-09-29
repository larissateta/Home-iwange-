import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Register from "../screens/auth/Register.screen";
import Login from "../screens/auth/Login.screen";
import CarouScreen from "../screens/slide/Carou.screen";
import Main from "../screens/main";

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
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation