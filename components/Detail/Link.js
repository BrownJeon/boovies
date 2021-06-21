import React from "react";
import {TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import styled from "styled-components/native";

const Container = styled.View`
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
`;

const Text = styled.Text`
    font-weight: 600;
    margin-left: 10px;
`;

const Link = ({onPress, text, icon}) => (
    <TouchableOpacity onPress={onPress}>
        <Container>
            <FontAwesome
                name={icon}
                color="white"
                size={18}
            />
            <Text style={{color: "white"}}>{text}</Text>
        </Container>
    </TouchableOpacity>
);

export default Link;