import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {apiImage} from "../../api";
import Poster from "../Poster";
import {TouchableOpacity} from "react-native";
import Votes from "../Votes";
import {trimText} from "../../utils";
import {useNavigation} from "@react-navigation/native";

const Container = styled.View`
    width: 100%;
    height: 100%;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.5;
    position: absolute;
`;

const Content = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`;
const VotesContainer = styled.Text`
    margin-bottom: 5px;
`;
const Overview = styled.Text`
    color: white;
    font-weight: 500;
    opacity: 0.7;
`;

const Button = styled.View`
    margin-top: 10px;
    background-color: #2c3e50;
    padding: 7px 10px;
    border-radius: 2px;
`;

const ButtonText = styled.Text`
    color: white;
`;


const Slide = ({id, title, imagePath, votes, overview, poster}) => {
    const navigation = useNavigation();
    const gotoDetail = async () => {
        navigation.navigate("Detail", {
            id,
            title,
            imagePath,
            votes,
            overview,
            poster
        })
    }
    return (
        <Container>
            <BG resizeMode="cover" source={{uri: apiImage(imagePath)}}/>
            <Content>
                <Poster url={poster}/>
                <Data>
                    <Title>{trimText(title, 40)}</Title>
                    <VotesContainer>
                        <Votes votes={votes} />
                    </VotesContainer>
                    <Overview>{trimText(overview, 120)}</Overview>
                    <TouchableOpacity onPress={gotoDetail}>
                        <Button>
                            <ButtonText>View Detail</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    )
};

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
};

export default Slide;
