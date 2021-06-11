import React, {useState} from 'react';
import AppLoading from "expo-app-loading";
import {Image, StatusBar} from "react-native";
import {Asset} from "expo-asset";
import {Ionicons} from "@expo/vector-icons";
import * as Font from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import Stack from "./Navigation/Stack";

const cacheImages = (images) => images.map(image => {
    if (typeof image === "string") {
        return Image.prefetch(image);
    } else {
        return Asset.fromModule(image).downloadAsync();
    }
});

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const loadAssets = () => {
        const images = cacheImages([
            "https://images.unsplash.com/photo-1622567078517-303852782a2e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            , require("./assets/splash.png")
        ]);
        const fonts = cacheFonts([Ionicons.font]);

        return Promise.all([...images, ...fonts]);
    };
    const onFinish = () => setIsReady(true);
    return isReady ? (
            <>
                <NavigationContainer>
                    <Stack/>
                </NavigationContainer>
                <StatusBar barStyle="light-content" />
            </>
        )
        : (
            <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error}/>
        )
}
