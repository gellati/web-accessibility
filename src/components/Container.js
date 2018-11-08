import React, { Component } from 'react';
import styled from 'styled-components'
import Panel from './Panel'
import Header from './Header'
import MainContent from './MainContent'

const ContainerWrapper = styled.div`
  width: 720px;
  margin: 0 auto;
`

class Container extends Component {
  render() {
    return (
      <ContainerWrapper className="container">
        <Header/>
        <MainContent/>
        <Panel/>
      </ContainerWrapper>
    );
  }
}

export default Container;
