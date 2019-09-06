import React, { useState } from "react";

import { Container, Section, ArrowWrapper, StyledArrow } from "./styles";
import { Subtitle } from "../elements/typography";
import Card from "../Card";

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
    },
    {
        id: "gt79091c5a880faf6fb5e6082eb1d2f4",
        name: "VoiceCode",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    },
    {
        id: "gu69091c5a880faf6fb5e6082eb1b221",
        name: "Instacoffe",
        description: "Lorem ipsum",
        image: "https://zendostrike-general.s3.us-east-2.amazonaws.com/content/sabrina.jpg"
    }
]

const calculateCurrentItems = (items, sectionsCount, n) => {
    // there must be always n items showing
    const lastItem = items.pop();
    items.unshift(lastItem);
    
    

    return items;
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

const Carousel = ({title}) => {
    const itemsToShow = {
        sm: 3,
        md: 4,
        lg: 6
    };

    const sectionsCount = Math.ceil(projects.length / itemsToShow.lg);
    const [prev, setPrev] = useState(ArrowNavigation);
    const [next, setNext] = useState(getArrowNavigation(projects.length));
    const [currentItems, setCurrentItems] = useState(calculateCurrentItems(projects, sectionsCount, 5));

    // calculate if card 1 is on position 0
    const isNextTriggered = currentItems[0].id !== projects[0].id;

    // calculate if prev should be visible or not

    return (
        <>
            <div style={{ padding: "10px 0px"}}>
                <Subtitle style={{marginLeft: 80 }}>{title}</Subtitle>
            </div>
            <Container>
                <Arrow direction="left" isNextTriggered={isNextTriggered} />
                <Section id="section1">
                    {currentItems.map((e, index) => (
                        <Card item={e} disabled={index === currentItems.length - 1 || index === 0} />
                    ))}
                </Section>
                <Arrow direction="right" />
            </Container>
        </>
    )
}

export default Carousel;
