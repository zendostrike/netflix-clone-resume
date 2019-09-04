import React, { useState } from "react";
import styled from "styled-components";

import { Subtitle } from "./elements/typography";
import Card from "./Card";

const projects = [
    {
        id: "c4ca4238a0b923820dcc509a6f75849b",
        name: "Arguedas",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    },
    {
        id: "c81e728d9d4c2f636f067f89cc14862c",
        name: "Rumi",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    },
    {
        id: "eccbc87e4b5ce2fe28308fd9f2a7baf3",
        name: "Netflix Resume",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    },
    {
        id: "a87ff679a2f3e71d9181a67b7542122c",
        name: "Solvers",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    },
    {
        id: "e4da3b7fbbce2345d7772b0674a318d5",
        name: "Wariques",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    },
    {
        id: "1679091c5a880faf6fb5e6087eb1b2dc",
        name: "Streeet",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    }
]

const Container = styled.div`
    display: grid;
    position: relative;
`;

const Section = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, fit-content(244px));
    margin-left: 80px;
`;

const StyledArrow = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 5em;
    width: 80px;
    padding: 20px;
    text-align: center;
    z-index: 1;
    top: 44px;
    bottom: 0;
    cursor: pointer;
    visibility: hidden;
    transition: visibility 0s, opacity 0.5s linear;
    ${({visible}) => visible ? "position: absolute;" : "position: relative;"}
`;

const ArrowWrapper = styled.div`
    width: 80px;
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 0;
    ${({isLeft}) => {
        if(isLeft) {
            return "left: 0;background: linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);"
        } else {
            return "right: 0;background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);"
        }
    }}
    :hover {
        ${StyledArrow} {
            visibility: visible;
            background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
        }
    }
    
`;

const contentGenerator = items => {
    // define prev, next, current items
}

const ArrowNavigation = {
    visible: false,
    target: null
}

const getArrowNavigation = itemsCount => {
    return itemsCount > 6 ? Object.assign(ArrowNavigation, { visible: true }) : ArrowNavigation
}

const Arrow = ({ direction, isNextTriggered }) => {
    const isLeft = direction === "left";
    const label  = isLeft ? "‹" : "›";
    return (<ArrowWrapper visible={isNextTriggered} isLeft={isLeft}>
        <StyledArrow visible={isNextTriggered}>{label}</StyledArrow>
    </ArrowWrapper>)
}

const CardRow = ({title}) => {
    const itemsToShow = {
        sm: 3,
        md: 4,
        lg: 5
    };

    const sectionsCount = Math.ceil(projects.length / itemsToShow.lg);
    const [prev, setPrev] = useState(ArrowNavigation);
    const [next, setNext] = useState(getArrowNavigation(projects.length));
    const [currentItems, setCurrentItems] = useState(projects.slice(0, itemsToShow.lg));

    // calculate if card 1 is on position 0
    const isNextTriggered = currentItems[0].id !== projects[0].id;

    // calculate if prev should be visible or not

    return (
        <>
            <Subtitle style={{marginLeft: 80 }}>{title} / {sectionsCount} / {isNextTriggered ? "triggered" : "not triggered"} </Subtitle>
            <Container>
                <Arrow direction="left" isNextTriggered={isNextTriggered} />
                <Section id="section1">
                    {currentItems.map((e, index) => (
                        <Card item={e} disabled={index === currentItems.length - 1} />
                    ))}
                </Section>
                <Arrow direction="right" />
            </Container>
        </>
    )
}

export default CardRow;
