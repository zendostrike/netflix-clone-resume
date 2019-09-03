import React from "react";
import styled from "styled-components";
import profileIcon from "../images/profile.png";

const Container = styled.div`
    height: 29px;
    width: 32px;
    background: url(${profileIcon});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`;

const Avatar = () => (
    <Container />
)

export default Avatar;