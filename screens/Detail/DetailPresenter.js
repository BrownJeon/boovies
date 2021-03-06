import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import {apiImage} from "../../api";
import {Dimensions, ActivityIndicator, Text} from "react-native";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import {formatDate} from "../../utils";
import Link from "../../components/Detail/Link";

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`;

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    top: 30px;
`;

const Header = styled.View`
    height: ${Dimensions.get("window").height / 3};
    align-items: center;
    justify-content: flex-end;
`;

const Info = styled.View`
    width: 50%;
    margin-left:40px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 20px;
`;

const Data = styled.View`
    margin-top: 30px;
    padding: 0px 30px;
`;

const DataName = styled.Text`
    color: white;
    opacity: 0.8;
    font-weight: 800;
    margin-top: 30px;
    margin-bottom: 15px;
`;

const DataValue = styled.Text`
    color: white;
    opacity: 0.5;
    font-weight: 500;
`;

export default ({openBrowser, results, isLoading}) => (
    <ScrollContainer isLoading={false} contentContainerStyle={{paddingBottom: 50}}>
        <Header>
            <BG source={{uri: apiImage(results.imagePath, "-")}}/>
            <Container>
                <Poster url={results.poster}/>
                <Info>
                    <Title>{results.title}</Title>
                    {results.votes ? <Votes votes={results.votes}/> : null}
                </Info>
            </Container>
        </Header>
        <Data>
            {results.overview ? (
                <>
                    <DataName>Overview</DataName>
                    <DataValue>{results.overview}</DataValue>
                </>
            ) : null}
            {isLoading && <ActivityIndicator style={{marginTop: 30}} color={"white"}/>}
            {results.spoken_language ? (

                <>
                    <DataName>languages</DataName>
                    <DataValue>
                        {results.spoken_language.map(l => `${l.name} `)}
                    </DataValue>
                </>
            ) : null}
            {results.release_date ? (
                <>
                    <DataName>release Date</DataName>
                    <DataValue>
                        {formatDate(results.release_date)}
                    </DataValue>
                </>
            ) : null}
            {results.status ? (
                <>
                    <DataName>Status</DataName>
                    <DataValue>{results.status}</DataValue>
                </>
            ) : null}
            {results.runtime ? (
                <>
                    <DataName>Runtime</DataName>
                    <DataValue>{results.runtime} minutes</DataValue>
                </>
            ) : null}
            {results.first_air_date ? (
                <>
                    <DataName>First Air Date</DataName>
                    <DataValue>{formatDate(results.first_air_date)}</DataValue>
                </>
            ) : null}
            {results.genres ? (
                <>
                    <DataName>Genres</DataName>
                    <DataValue>
                        {results.genres.map((g, index) =>
                            index + 1 === results.genres.length ? g.name : `${g.name}, `
                        )}
                    </DataValue>
                </>
            ) : null}
            {results.number_of_episodes ? (
                <>
                    <DataName>Seasons / Episodes</DataName>
                    <DataValue>
                        {results.number_of_seasons} / {results.number_of_episodes}
                    </DataValue>
                </>
            ) : null}
            {results.imdb_id ? (
                <Link
                    text="IMDB Link"
                    icon={"imdb"}
                    onPress={() => openBrowser(`https://www.imdb.com/title/${results.imdb_id}`)}
                />
            ) : null}
            {results.videos.results?.length > 0 ? (
                <>
                    <DataName>Vidoes</DataName>
                    {results.videos.results.map(video => (
                        <Link
                            key={video.key}
                            onPress={() => openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
                            text={video.name}
                            icon={"youtube-play"}
                        />
                    ))}
                </>
            ) : null}
        </Data>
    </ScrollContainer>
);