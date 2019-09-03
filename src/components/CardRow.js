import React from "react";
import styled from "styled-components";

import { Subtitle } from "./elements/typography";
import Card from "./Card";

const projects = [
    {
        id: 1,
        name: "Arguedas",
        description: "Lorem imposum"
    },
    {
        id: 1,
        name: "Arguedas",
        description: "Lorem imposum"
    },
    {
        id: 1,
        name: "Arguedas",
        description: "Lorem imposum"
    },
    {
        id: 1,
        name: "Arguedas",
        description: "Lorem imposum"
    },
    {
        id: 1,
        name: "Arguedas",
        description: "Lorem imposum"
    },
    {
        id: 1,
        name: "Arguedas",
        description: "Lorem imposum"
    }
]

const Container = styled.div`
    overflow: auto;
    padding: 10px 0px;
`;

const Wrapper = styled.div`
    display: -webkit-box;
`;

const CardRow = ({title}) => (
    <>
    <Subtitle>{title}</Subtitle>
    <Container>
        <Wrapper>
            {projects.map(e => (
                <Card />
            ))} 
        </Wrapper>
    </Container>
    </>
)

export default CardRow;
