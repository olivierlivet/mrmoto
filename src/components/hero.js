import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Flex,
  Heading,
  Grid,
  Image,
  Text
} from '@chakra-ui/react'

import heroJpg from '../images/hero-1.jpg'
import heroWebp from '../images/hero-1.webp'

const Hero = ({ siteTitle }) => (
  <Box>
    <Grid
      gridTemplateColumns={{ base:'100%', lg:'75% 25%'}}
      gridGap='1rem'
    >
      <Box>
        <Heading>Notre dernière actu :</Heading>
        <Box
          position='relative'
        >
          <Flex
            overflow='hidden'
            borderRadius='20px'
            position='absolute'
            color='white'
            top='0'
            left='0'
            w='100%'
            h='100%'
            justify='center'
            align='center'

            bg='rgba(10,10,10,.7)'
              h='100%'
          >
            <Box
              px={'10rem'}
              
            >
              <Heading
                color='white'
              >
                Qu’est-ce que la garantie « prêt du guidon » ?
              </Heading>
              <Text>
                Lorsque l’on parle d’assurance moto, nous avons tendance à penser aux 3 formules de base proposées (au tiers, intermédiaire et tous risques). Mais en fonction de vos besoins, vous pouvez également souscrire à des garanties supplémentaires. Parmi elles, la garantie...
              </Text>


            </Box>


        </Flex>
        <picture>
          <source
            type='image/webp'
            srcSet={heroWebp}
          />
          <source
            type='image/jpeg'
            srcSet={heroJpg}
          />
          <Image
            src={heroJpg}
            alt='Actualité Mr Moto'
            w='100%'
            h='100%'
            // objectFit='cover'
          />
        </picture>
        </Box>
        
      </Box>
      <Box>
        <Heading
          fontSize='18px'
        >Promos moto chez Motoblouz 🐓</Heading>
        <Text>Test</Text>

      </Box>
    </Grid>
  </Box>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
