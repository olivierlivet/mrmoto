import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box
} from '@chakra-ui/react'

const Header = ({ siteTitle }) => (
  <Box>
    Logo
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
