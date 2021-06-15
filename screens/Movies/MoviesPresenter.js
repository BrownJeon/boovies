import React from "react";
import styled from "styled-components/native";
import {ActivityIndicator, Dimensions, ScrollView} from "react-native";
import Swiper from "react-native-web-swiper";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
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

export default ({isLoading, nowPlaying, popular, upcoming}) => {
    return (
        <ScrollContainer isLoading={isLoading}>
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
                    <HorizontalSlider title={"Popular Movies"}>
                        {popular.map(movie => (
                            <Vertical
                                id={movie.id}
                                key={movie.id}
                                title={movie.title}
                                votes={movie.vote_average}
                                poster={movie.poster_path}
                            />
                        ))}
                    </HorizontalSlider>
                    <List title={"Coming Soon"}>
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
                    </List>
                </Container>
            </>
        </ScrollContainer>
    )
}