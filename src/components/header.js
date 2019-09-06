import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import netflixLogo from "../images/netflix_logo.svg";
import searchIcon from "../images/search_icon.svg";
import Avatar from "./avatar";


const Container = styled.header`
  background: #000;
  padding: 24px 50px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  background: url(${netflixLogo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 30px;
  width: 120px;
  cursor: pointer;
  margin-right: 20px;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

const LinkButton = styled.span`
  color: ${({ selected }) => selected ? "#C11019" : "#DBDBDB"};
  font-weight: ${({ selected }) => selected ? "600" : "normal"};
  cursor: pointer;
  font-size: 14px;
`;

const Header = ({ siteTitle }) => (
  <Container>
    <Left>
      <Logo />
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <LinkButton selected>
          My Work
        </LinkButton>
      </Link>
      <Link
        to="/page-2"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <LinkButton>
          About me
        </LinkButton>
      </Link>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <LinkButton>
          Blog
        </LinkButton>
      </Link>
    </Left>
    <Right>
      <div>
        <LinkButton>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Search
          </Link>
        </LinkButton>
      </div>
      <div>
        <Avatar />
      </div>
    </Right>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
