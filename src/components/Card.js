import React from "react";
import styled from "styled-components";

const Container = styled.div`
    cursor: pointer;
    transition: 450ms all;
    :hover{
        transform: scale(1.5);
        margin: 0 50px;
        z-index: 2;
    }
    width: 244px;
    height: 138px;
    padding: 0 2px;
    ${({ isDisabled }) => isDisabled && "pointer-events:none;"}
`;

const Card = ({ item, disabled }) => (
    <Container isDisabled={disabled} onClick={() => alert("hola")}>
        <img src={item.image} alt={item.name} />
    </Container>
)

export default Card;
