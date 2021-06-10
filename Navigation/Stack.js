import React from "react";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
)