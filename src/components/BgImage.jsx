// src/components/BgImage.jsx

import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components'

const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc};
`

const FakeBgImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ height }) => height};
  width: 100%;
  
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`

const BgImage = ({
  fluid,
  title,
  height,
  alt,
  mobileheight,
  overlayColor,
  children,
  className,
}) => {
  return (
  <Parent bc={overlayColor}>
    <FakeBgImage
      image={fluid}
      title={title}
      height={height}
      mobileheight={mobileheight}
      alt={alt}
    />
    <Content className={className}>{children}</Content>
  </Parent>
)}

BgImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  alt: PropTypes.string,
  mobileheight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}
BgImage.defaultProps = {
  height: null,
  mobileheight: null,
  overlayColor: 'transparent',
  children: null,
  className: null,
}

export default BgImage
