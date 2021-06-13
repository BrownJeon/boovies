import React from "react";
import styled from "styled-components/native";
import {ActivityIndicator, Dimensions, View} from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../components/Slide";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("screen");

const Container = styled.View`
    flex:1;
    background-color: black;
    justify-content: center;
`;

const SliderContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
`;

export default ({isLoading, nowPlaying}) => {
    // console.log(nowPlaying);
    return (
        <SliderContainer>
            {nowPlaying.length == 0 ? (
                    <ActivityIndicator color="white" size="small"/>
                )
                :
                <>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                            <Slide key={movie.id}
                                   votes={movie.vote_average}
                                   overview={movie.overview}
                                   imagePath={movie.backdrop_path}
                                   id={movie.id}
                                   title={movie.original_title}
                            />
                        ))}
                    </Swiper>
                </>
            }
        </SliderContainer>
    )
}