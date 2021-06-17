import React from "react";
import {Text, View} from "react-native";

export default ({
                    navigation,
                    route: {
                        params: {
                            id,
                            title
                        }
                    }
                }
) => {
    navigation.setOptions({title});
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
};