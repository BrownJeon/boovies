import React from "react";
import {Text, View, Button} from "react-native";

export default ({navigation}) => (
    <View>
        <Text>Home</Text>
        <Button onPress={() => navigation.navigate("Detail")} title="go to detail"/>
    </View>
);