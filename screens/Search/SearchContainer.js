import React, {useState} from "react";
import SearchPresenter from "./SearchPresenter";
import {movieApi, tvApi} from "../../api";

export default () => {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState({
        movies: [],
        shows: [],
        moviesError: null,
        showsError: null
    });

    const onChange = (text) => setKeyword(text);
    const search = async () => {
        if (keyword === "") {
            return;
        }
        const [movies, moviesError] = await movieApi.search(keyword);
        const [shows, showsError] = await tvApi.search(keyword);
        setResults({
            movies,
            shows,
            moviesError: null,
            showsError: null
        })
    }

    return (
        <SearchPresenter
            {...results}
            keyword={keyword}
            onSubmit={search}
            onChange={onChange}
        />
    )
}
