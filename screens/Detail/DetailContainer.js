import React, {useEffect, useState} from "react";
import DetailPresenter from "./DetailPresenter";
import {movieApi, tvApi} from "../../api";
import * as WebBrowser from 'expo-web-browser';

export default ({
                    navigation,
                    route: {
                        params: {
                            isTv, id, title, imagePath, poster, votes, overview, spoken_language
                        }
                    }
                }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({title: title || "Detail"});
    }, []);

    const [isLoading, setIsLoading] = useState(true);
    const [detail, setDetail] = useState({
        isLoading: true,
        results: {
            title,
            imagePath,
            poster,
            votes,
            overview,
            spoken_language,
            videos: {
                results: []
            }
        }
    });
    const getData = async () => {
        const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);
        setDetail({
            isLoading: false,
            results: {
                ...getDetail,
                title: isTv ? getDetail.name : getDetail.title,
                imagePath: getDetail.backdrop_path,
                poster: getDetail.poster_path,
                votes: getDetail.vote_avarage,
                overview: getDetail.overview,
                spoken_language: getDetail.spoken_languages
            }
        });
    };

    useEffect(() => {
        getData();
    }, [id]);

    const openBrowser = async (url) => {
        const result = await WebBrowser.openBrowserAsync(url);
    }

    return (
        <DetailPresenter openBrowser={openBrowser} {...detail}/>
    )
}