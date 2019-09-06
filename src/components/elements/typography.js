import styled from "styled-components";

const OverTitle = styled.h3`
    font-size: calc(10px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: normal;
    margin: 0px;
`;

const Subtitle = styled.h3`
    font-size: calc(10px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 600;
    margin: 0px;
`;

const Title = styled.h1`
    font-weight: 600;
    letter-spacing: 2px;
    font-size: calc(55px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
`;

const Paragraph = styled.p`
    font-size: calc(8px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
`;

const SuperStrong = styled.span`
    font-weight: 900;
`;

export {
    OverTitle,
    Subtitle,
    Title,
    Paragraph,
    SuperStrong,
}