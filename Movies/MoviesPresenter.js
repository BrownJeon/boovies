import React from "react";
import styled from "styled-components/native";
import {ActivityIndicator, Dimensions} from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../components/Slide";

const Container = styled.View`
    flex:1;
    background-color: black;
    justify-content: center;
`;

export default ({isLoading, nowPlaying}) => {
    // console.log(nowPlaying);
    return (
        <Container>
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
                                   title={movie.original_language}
                            />
                        ))}
                    </Swiper>
                </>
            }
        </Container>
    )
}