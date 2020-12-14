import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

const Footer = ({ siteTitle }) => (
  <Flex spacing={ 10 }
    mt='4rem'
    bg='gray.800'
    color='white'
    px={ 20 }
    minH='200px'
    justify='center'
    align='center'
  >
        <Text>
            Nous contacter
        </Text>
  </Flex>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
