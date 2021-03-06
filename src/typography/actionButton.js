import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const ActionButtonWrapper = styled.div`
  a {
    display: block;
    margin: 15px auto;
    padding: 5px 10px !important;
    background-color: #d40000;
    border: 3px #d40000 solid !important;
    border-radius: 10px;
    text-decoration: none;
    max-width: 250px;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    color: #fff !important;
    transition: .3s !important;
    
    &:hover {
      background-color: #fff;
      color: #d40000 !important;
      background-position: 0 0 !important;
    }
  }
`

const ActionButton = ({children, to, download}) => (
  <ActionButtonWrapper>
    {
      (to && to.length >= 4 && to.substring(0, 4) === 'http') || download
      ?
        <a href={to} target={'_blank'} rel={'noopener noreferrer'} download={download}>{children}</a>
        :
        <Link to={to}>{children}</Link>
    }
  </ActionButtonWrapper>
)

ActionButton.propTypes = {
  to: PropTypes.string.isRequired,
  download: PropTypes.bool
}

export default ActionButton
