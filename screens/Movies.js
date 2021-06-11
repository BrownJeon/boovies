import React from "react";
import {Text, View, Button} from "react-native";

export default ({navigation}) => (
    <View style={{flex:1, backgroundColor: "black"}}>
        <Text>Movies</Text>
        <Button title="Movie" onPress={() => navigation.navigate("Detail")} ></Button>
    </View>
);