import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import HorizontalSlider from "../../components/HorizontalSlider";
import styled from "styled-components/native";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";

const Container = styled.View`
    margin-top: 30px;
`;


export default ({loading, popular, topRated, today, refreshFunc}) => (
    <ScrollContainer refreshFunc={refreshFunc} isLoading={loading}>
        <Container>
            <HorizontalSlider
                title={"Popular Shows"}
                isTv={true}
                children={popular}
            />
            <HorizontalSlider
                title={"Top Rated"}
                isTv={true}
                children={topRated}
            />
            <List
                title={"Airing Today"}
                isTv={true}
                children={today}
            />
        </Container>
    </ScrollContainer>
)
