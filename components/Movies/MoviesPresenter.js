import React from "react";
import styled from "styled-components/native";
import {ActivityIndicator, Dimensions, ScrollView} from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../Slide";
import Title from "../Title";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const SliderContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
`;

const Container = styled.View`
    padding-top: 50px;
`;

export default ({isLoading, nowPlaying}) => {
    // console.log(nowPlaying);
    return (
        <ScrollView style={{backgroundColor:"black"}} contentContainerStyle={{flex: 1, justifyContent: isLoading ? "center" : "flext-start"}}>
            {nowPlaying.length == 0 ? (
                    <ActivityIndicator color="white" size="small"/>
                )
                :
                <>
                    <SliderContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map(movie => (
                                <Slide key={movie.id}
                                       votes={movie.vote_average}
                                       overview={movie.overview}
                                       imagePath={movie.backdrop_path}
                                       id={movie.id}
                                       title={movie.original_title}
                                       poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SliderContainer>
                    <Container>
                        <Title title={"Popular Movies"}/>
                    </Container>
                </>
            }
        </ScrollView>
    )
}