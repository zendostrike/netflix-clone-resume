import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Container = styled.div`
    display: flex;
    position: relative;
`;

const Section = styled.section`
    display: -webkit-box;
    width: 100%;
    transform: translate3d(-147px, 0px, 0px);
    ${breakpoint('tablet')`
        transform: translate3d(-147px, 0px, 0px);
    `}

    ${breakpoint('desktop')`
        transform: translate3d(-147px, 0px, 0px);
    `}
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

export {
    Container,
    Section,
    StyledArrow,
    ArrowWrapper
}