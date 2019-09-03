import React from "react";
import styled from "styled-components";
import reactImg from "../images/react.jpg";

const Container = styled.div`
    width: 240px;
    height: 150px;
    background: url(${reactImg});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    -moz-box-shadow:    inset 0px 0px 100px #000000;
    -webkit-box-shadow: inset 0px 0px 100px #000000;
    box-shadow:         inset 0px 0px 100px #000000;
    transition: transform .5s;
    :hover{
        transform: scale(1.5);
    }
`;

const Card = () => (
    <Container />
)

export default Card;
