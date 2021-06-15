import React from "react";
import Title from "./Title";
import {ScrollView} from "react-native";
import PropTypes from "prop-types";
import Vertical from "./Vertical";

const Horizontal = ({title, children}) => (
    <>
        <Title title={title}/>
        <ScrollView
            style={{marginTop: 20, marginBottom: 40}}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 30}}
        >
            {children}
        </ScrollView>
    </>
);

Horizontal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Horizontal;
