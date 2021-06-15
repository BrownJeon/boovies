import React from "react";
import Title from "./Title";
import {ScrollView} from "react-native";
import Vertical from "./Vertical";

export default ({title, children}) => (
    <>
        <Title title={title}/>
        <ScrollView
            style={{marginTop: 20, marginBottom: 40}}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 30}}
        >
            {children}
        </ScrollView>
    </>
)