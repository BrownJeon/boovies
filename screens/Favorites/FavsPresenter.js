import React, {useState} from "react";
import styled from "styled-components/native";
import {Dimensions, PanResponder, Animated} from "react-native";
import {apiImage} from "../../api";

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window");

const Container = styled.View`
    padding-top: 50px;
    flex: 1;
    background-color: black;
    align-items: center;
`;


const Poster = styled.Image`
    border-radius: 20px;
    width: 100%;
    height: 100%;
`;

const styles = {
    top: 80,
    height: HEIGHT / 1.5,
    width: "90%",
    position: "absolute"
}

export default ({results}) => {
    const [topIndex, setTopIndex] = useState(0);
    const nextCard = () => setTopIndex(currentValue => currentValue + 1);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, {dx, dy}) => {
            position.setValue({x: dx, y: dy});
        },
        onPanResponderRelease: (event, {dx, dy}) => {
            if (dx >= 250) {
                Animated.spring(position, {
                    toValue: {
                        x: WIDTH + 100,
                        y: dy
                    },
                    useNativeDriver: true
                }).start(nextCard);
            } else if (dx <= -250) {
                Animated.spring(position, {
                    toValue: {
                        x: -WIDTH - 100,
                        y: dy
                    },
                    useNativeDriver: true
                }).start(nextCard);
            } else {
                Animated.spring(position, {
                    toValue: {
                        x: 0,
                        y: 0
                    },
                    useNativeDriver: true
                }).start();
            }
            ;
        }
    });
    const roationValues = position.x.interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ["-5deg", "0deg", "5deg"],
        extrapolate: "clamp"
    });
    const secondCardOpacity = position.x.interpolate({
        inputRange: [-255, 0, 255],
        outputRange: [1, 0.2, 1],
        extrapolate: "clamp"
    });
    const secondCardScale = position.x.interpolate({
        inputRange: [-255, 0, 255],
        outputRange: [1, 0.8, 1],
        extrapolate: "clamp"
    });
    return (
        <Container>
            {results.map((result, index) => {
                if (index < topIndex) {
                    return null;
                } else if (index === topIndex) {
                    return (
                        <Animated.View style={{
                            ...styles,
                            zIndex: 1,
                            transform: [{rotate: roationValues}, ...position.getTranslateTransform()]
                        }} key={result.id} {...panResponder.panHandlers}>
                            <Poster source={{uri: apiImage(result.poster_path)}}/>
                        </Animated.View>
                    )
                } else if (index === topIndex + 1) {
                    return (
                        <Animated.View style={{
                            ...styles,
                            zIndex: -index,
                            opacity: secondCardOpacity,
                            transform: [{
                                scale: secondCardScale
                            }]
                        }} key={result.id} {...panResponder.panHandlers}>
                            <Poster source={{uri: apiImage(result.poster_path)}}/>
                        </Animated.View>
                    )
                } else {
                    return (
                        <Animated.View style={{
                            ...styles,
                            zIndex: -index,
                            opacity: 0
                        }} key={result.id} {...panResponder.panHandlers}>
                            <Poster source={{uri: apiImage(result.poster_path)}}/>
                        </Animated.View>
                    )
                }
            })}
        </Container>
    );
};