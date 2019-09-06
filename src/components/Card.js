import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    transition: 450ms all;
    :hover{
        transform: scale(1.5);
        margin: 0 50px;
        z-index: 4;
    }
    max-width: 225px;
    height: 125px;
    padding: 0 2px;
    position: relative;
    ${({ isDisabled }) => isDisabled && "pointer-events:none;"}
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Card = ({ item, disabled }) => (
    <Container isDisabled={disabled} onClick={() => alert("hola")}>
        <Image src={item.image} alt={item.name} />
        <span style={{ position: "absolute", top: 0, left: 10, fontSize: "10px"}}>{item.name}</span>
    </Container>
)

export default Card;
