import React from "react";
import PropTypes from "prop-types";
import {ScrollView, ActivityIndicator} from "react-native";

const ScrollContainer = ({isLoading, children}) => (
    <ScrollView
        style={{backgroundColor: "black"}}
        contentContainerStyle={{
            // web에서 비정상 작동하여 주석처리
            // flex: isLoading ? 1 : 0,
            justifyContent: isLoading ? "center" : "flext-start"
        }}
    >
        {isLoading ? <ActivityIndicator color="white" font="small"/> : children}
    </ScrollView>
);

ScrollContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
};

export default ScrollContainer;



