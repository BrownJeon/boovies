import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
    color: white;
    opacity: 0.7;
    font-weight: 500;
`;

export default ({votes}) => (
    <Container>🌟 {votes} / 10</Container>
)
