import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import Horizontal from "./Horizontal";

const Container = styled.View`
    margin-top: 20px;
`;

const List = ({title, children, isTv = false}) => (
    <>
        <Title title={title} />
        <Container>
            {children.map(show => (
                <Horizontal
                    isTv={isTv}
                    id={show.id}
                    key={show.id}
                    title={show.name}
                    votes={show.vote_average}
                    poster={show.poster_path}
                    overview={show.overview}
                />
            ))}
        </Container>
    </>
);

export default List;