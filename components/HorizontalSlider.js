import React from "react";
import Title from "./Title";
import {View, ScrollView} from "react-native";
import PropTypes from "prop-types";
import Vertical from "./Vertical";

// TODO array를 받아서 render해줄수 있도록 수정 필요
const Horizontal = ({title, children, isTv = false}) => (
    <View>
        <Title title={title}/>
        <ScrollView
            style={{marginTop: 20, marginBottom: 40}}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 30}}
        >
            {children.map(movie => (
                <Vertical
                    isTv={isTv}
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    votes={movie.vote_average}
                    poster={movie.poster_path}
                />
            ))}
        </ScrollView>
    </View>
);

Horizontal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Horizontal;
