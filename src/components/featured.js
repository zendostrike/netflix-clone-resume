import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { OverTitle, Subtitle, SuperStrong, Title, Paragraph } from "./elements/typography";
import voldemortImg from "../images/voldemort2.png";
import noiseImg from "../images/noise.png";

const Container = styled.div`
    background: url(${voldemortImg}) #080808;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left 446px bottom;
    height: 500px;
    -moz-box-shadow:    inset 60px 60px 100px #000000;
    -webkit-box-shadow: inset 60px 60px 100px #000000;
    box-shadow:         inset 60px 60px 100px #000000;
`;

const Noise = styled.div`
    background: url(${noiseImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    width: 980px;
    position: absolute;
`;

const Content = styled.div`
    padding: 50px 80px;
`;

const PlayButton = styled.div`
    text-decoration: none;
    color: #fff;
    background: rgb(177, 177, 177,0.2);
    max-width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Avatar = () => (
    <Container>
        <Noise />
        <Content>
            <OverTitle><SuperStrong>NETFLIX</SuperStrong> ORIGINAL</OverTitle>
            <Title>ZENDOSTRIKE</Title>
            <Subtitle>UI Developer Season 3</Subtitle>
            <Paragraph>When a day in a lifetime of a dev goes wrong.</Paragraph>
            <Link to="/page-2/" className="linkbutton">
                <PlayButton>
                    Play
                </PlayButton>
            </Link>
        </Content>
    </Container>
)

export default Avatar;