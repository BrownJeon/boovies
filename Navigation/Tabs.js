import React, {useEffect, useLayoutEffect} from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from "../Movies/MoviesContainer";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favorites from "../screens/Favorites";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {Platform} from "react-native-web";

const Tab = createBottomTabNavigator();

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: getFocusedRouteNameFromRoute(route) || "Movies"
        });
    }, [route]);
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    switch (route.name) {
                        case "Movies" :
                            iconName += "film";
                            break;
                        case "TV" :
                            iconName += "tv";
                            break;
                        case "Search" :
                            iconName += "search";
                            break;
                        case "Discovery" :
                            iconName += "heart";
                            break;
                        default :
                            iconName = "alert-circle-outline";
                    }
                    return <Ionicons name={iconName} color={focused ? "white" : "grey" } size={20} />
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: "black",
                    borderTopColor: "black"
                }
            }}>
            <Tab.Screen name="Movies" component={Movies}/>
            <Tab.Screen name="TV" component={Tv}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="Discovery" component={Favorites}/>
        </Tab.Navigator>
    )
}