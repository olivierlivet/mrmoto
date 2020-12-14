import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'

const Hero = ({ siteTitle }) => (
  <Box>
    <Heading>Notre dernière actu :</Heading>
    <SimpleGrid>
      <Box>
        Main actu
      </Box>
      <Box>
        Second actu
      </Box>
    </SimpleGrid>
  </Box>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
