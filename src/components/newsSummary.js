import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'

const NewsSummary = ({ siteTitle }) => (
  <Box>
    <Heading>Toute l’actualité moto :</Heading>
    <SimpleGrid
        columns={{ base: 1, lg:3 }}
        gap={ 1 }
    >
      {
          [1,2,3].map( item => 
            <Box>
                Item
            </Box>
            )
      }
    </SimpleGrid>
  </Box>
)

NewsSummary.propTypes = {
  siteTitle: PropTypes.string,
}

NewsSummary.defaultProps = {
  siteTitle: ``,
}

export default NewsSummary
