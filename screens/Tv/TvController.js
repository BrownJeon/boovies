import React, {useEffect, useState} from "react";
import {tvApi} from "../../api";
import TvPresenter from "./TvPresenter";

export default () => {
    const [shows, setShows] = useState({
        isLoading: true,
        today: [],
        thisWeek: [],
        topRated: [],
        popular: [],
        todayError: null,
        thisWeekError: null,
        topRatedError: null,
        popularError: null
    });
    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        setShows({
            isLoading: false,
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError
        });

        // console.log(shows);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <TvPresenter {...shows}/>
    );
}