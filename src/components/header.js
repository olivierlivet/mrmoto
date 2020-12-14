import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box
} from '@chakra-ui/react'

const Header = ({ siteTitle }) => (
  <Box
    fontWeight='700'
    color='gray.900'
    fontSize={{ base:'22px', lg:'38px' }}
  >
    MonsieurMoto
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
