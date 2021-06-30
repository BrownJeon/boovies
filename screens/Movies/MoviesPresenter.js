import React from "react";
import styled from "styled-components/native";
import {Dimensions} from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
`;

const Container = styled.View`
    padding-top: 50px;
`;

export default ({isLoading, nowPlaying, popular, upcoming, refreshFunc}) => {
    return (
        <ScrollContainer refreshFunc={refreshFunc} isLoading={isLoading}>
            <>
                <SliderContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                            <Slide card={movie} />
                        ))}
                    </Swiper>
                </SliderContainer>
                <Container>
                    <HorizontalSlider title={"Popular Movies"} children={popular} />
                    <List title={"Coming Soon"} children={upcoming} />
                </Container>
            </>
        </ScrollContainer>
    )
}