import React from "react";
import styled from "styled-components/native";
import {ActivityIndicator, Dimensions, ScrollView} from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../Slide";
import Title from "../Title";
import Vertical from "../Vertical";
import Horizontal from "../Horizontal";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 4}px;
`;

const Container = styled.View`
    padding-top: 50px;
`;

const UpcomingContainer = styled.View`
    margin-top: 20px;
`;

export default ({isLoading, nowPlaying, popular, upcoming}) => {
    // console.log(nowPlaying);
    return (
        <ScrollView
            style={{backgroundColor: "black"}}
            contentContainerStyle={{
                justifyContent: isLoading ? "center" : "flext-start"
            }}
        >
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
                                       title={movie.title}
                                       poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SliderContainer>
                    <Container>
                        <Title title={"Popular Movies"}/>
                        <ScrollView
                            style={{marginTop: 20, marginBottom: 40}}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{paddingLeft: 30}}
                        >
                            {popular.map(movie => (
                                <Vertical
                                    id={movie.id}
                                    key={movie.id}
                                    title={movie.title}
                                    votes={movie.vote_average}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </ScrollView>
                        <Title title={"Coming Soon"}></Title>
                        {upcoming.map(movie => (
                            <Horizontal
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                poster={movie.poster_path}
                                releaseDate={movie.release_date}
                                overview={movie.overview}
                            />
                        ))}
                    </Container>
                </>
            }
        </ScrollView>
    )
}