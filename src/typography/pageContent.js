import React from 'react'
import styled from 'styled-components'
import { HoverBottomLineLinkStyle } from "../layout/globalStyles"

const Content = styled.div`
  padding: 10px 0;
  font-size: 16px;
  line-height: 1.65;
  ${HoverBottomLineLinkStyle}
  
  p {
    margin: 0 0 10px 0;
  }
  
  img {
    max-width: 90%;
    height: auto;
    max-height: 500px;
    display: block;
    margin: 15px auto 5px auto;
    border: 10px #f0f0f0 solid;
  }
`

const PageContent = ({children}) => (<Content>{children}</Content>)

export default PageContent