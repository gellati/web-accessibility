import React, { Component } from 'react';
import styled from 'styled-components'

import hero from '../images/Hero.gif';

const HeaderWrapper = styled.div`
  background-size: cover;
  background-color: #777;
  color: #111;
  border-radius: 10px;
  margin-bottom: 1.8%;
`

const AWrapper = styled.a`
position: absolute;
top: -500px;
width: 1px;
height: 1px;
overflow: hidden;

:hover, :visited{
  top: -500px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

:active, :focus{
  position: static;
  width: auto;
  height: auto;
}
`

class Header extends Component {
  render() {
    return (
      <HeaderWrapper className="header">
      <img src={hero} className="hero-logo" alt="Hero" />

          <p>
          <AWrapper id="skip" alt="skip to content" href="#content">
            Skip to Content
          </AWrapper>
          </p>

          <a
            className="App-link"
            href="https://www.w3.org/TR/WCAG20-TECHS/Overview.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG 2.0
          </a>
      </HeaderWrapper>
    );
  }
}

export default Header;
