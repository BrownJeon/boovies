import React, {useState} from "react";
import PropTypes from "prop-types";
import {ScrollView, ActivityIndicator, RefreshControl} from "react-native";

const ScrollContainer = ({isLoading, children, contentContainerStyle, refreshFunc}) => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        await refreshFunc();
        setRefreshing(false);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={"white"}
                />
            }
            style={{backgroundColor: "black"}}
            contentContainerStyle={{
                // web에서 비정상 작동하여 주석처리
                flex: isLoading ? 1 : 0,
                justifyContent: isLoading ? "center" : "flext-start",
                ...contentContainerStyle
            }}
        >
            {isLoading ? <ActivityIndicator color="white" font="small"/> : children}
        </ScrollView>
    );
};
;

ScrollContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    contentContainerStyle: PropTypes.object
};

export default ScrollContainer;



