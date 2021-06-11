import React, {useEffect} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default ({navigation, route}) => {
    useEffect(() => {
        navigation.setOptions({
            title: getFocusedRouteNameFromRoute(route) || "Movies"
        });
    }, [route]);
    return (
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={Movies}/>
            <Tab.Screen name="TV" component={Tv}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Favorites" component={Favorites}/>
        </Tab.Navigator>
    )
}