import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import HorizontalSlider from "../../components/HorizontalSlider";

export default ({isLoading, popular, topRated}) => (
    <ScrollContainer isLoading={isLoading} >
        <HorizontalSlider title={"Popular Shows"}>
            {popular.map(show => (
                <Vertical
                    id={show.id}
                    key={show.id}
                    title={show.name}
                    votes={show.vote_average}
                    poster={show.poster_path}
                />
            ))}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated"}>
            {topRated.map(show => (
                <Vertical
                    id={show.id}
                    key={show.id}
                    title={show.name}
                    votes={show.vote_average}
                    poster={show.poster_path}
                />
            ))}
        </HorizontalSlider>
    </ScrollContainer>
)