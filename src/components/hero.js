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
import motoblouz from '../images/motoblouz.gif'

const Hero = ({ siteTitle }) => (
  <Box
    display={{ base:'none', lg:'block'}}
  >
    <Grid
      gridTemplateColumns={{ base:'100%', lg:'1fr 25%'}}
      gridGap='2rem'
    >
      <Box>
        <Heading mb='1rem' as='p' fontSize='24px'>Notre dernière actu :</Heading>
        <Box
          position='relative'
          borderRadius='20px'
          overflow='hidden'
          cursor='pointer'
        >
          <Flex
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
              px={'5rem'}
              
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
          {/* <source
            type='image/webp'
            srcSet={heroWebp}
          /> */}
          <source
            type='image/jpeg'
            srcSet={heroJpg}
          />
          <Image
            src={heroJpg}
            alt='Actualité Mr Moto'
            w='100%'
            h='100%'
            objectFit='cover'
            m='0'
          />
        </picture>
        </Box>
        
      </Box>
      <Box>
        <Heading
          mb='1rem'
          fontSize='16px'
        >Promos moto chez Motoblouz 🐓</Heading>
        <Image
          src={ motoblouz }
          alt='Banner pub'
          borderRadius='10px'
        />

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
