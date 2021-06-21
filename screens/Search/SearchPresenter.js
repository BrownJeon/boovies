import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({movies, shows, keyword, onSubmit, onChange}) => (
    <ScrollContainer refreshFunc={onSubmit} isLoading={false}>
        <Input
            value={keyword}
            onSubmit={onSubmit}
            onChange={onChange}
            placeholder={"Write a keyword"}
        />
            {movies.length !== 0 && (
                <HorizontalSlider title={"Movie Search"}>
                        {movies.map(movie => (
                            <Vertical
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                votes={movie.vote_average}
                                poster={movie.poster_path}
                            />
                        ))}
                </HorizontalSlider>
            )}
            {shows.length !== 0 && (
                <HorizontalSlider title={"Tv Search"}>
                        {shows.map(show => (
                            <Vertical
                                isTv={true}
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                votes={show.vote_average}
                                poster={show.poster_path}
                            />
                        ))}
                </HorizontalSlider>
            )}
    </ScrollContainer>
)