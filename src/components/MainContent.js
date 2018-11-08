import React, { Component } from 'react';
import styled from 'styled-components'

const MainContentWrapper = styled.div`
  width: 75%;
  float: left;
  margin: 10px;
`

class MainContent extends Component {
  render() {
    return (
      <MainContentWrapper id="content">
          <p>
            Web accessibility
          </p>
          <a
            className="App-link"
            href="https://www.w3.org/TR/WCAG20-TECHS/Overview.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG 2.0
          </a>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt
           mollit anim id est laborum.
          </p>

      </MainContentWrapper>
    );
  }
}

export default MainContent;
