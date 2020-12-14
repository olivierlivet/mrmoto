import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

import th1jpg from '../images/news-1.jpg'
import th2jpg from '../images/news-2.png'
import th3jpg from '../images/news-3.jpg'

import th1webp from '../images/news-1.webp'
import th2webp from '../images/news-2.webp'
import th3webp from '../images/news-3.webp'

const data = [
    {
        title:"Nouveauté casque intégral de Schuberth : le S2 Sport Polar 2021",
        img:'',
        date:'Déc 10, 2020',
        category:'Actualités Moto'
    },
    {
        title:"Le nouveau maxi-scooter électrique de Pink Mobility est désormais disponible",
        img:'',
        date:'Déc 5, 2020',
        category:'Actualités Moto'
    },
    {
        title:"En France, les scooters et motos électriques peuvent rouler sur les couloirs des bus et taxis",
        img:'',
        date:'Déc 2, 2020',
        category:'Actualités Moto'
    },

]


const NewsSummary = ({ siteTitle }) => (
  <Box>
    <Heading
        mb={ 10 }
    >Toute l’actualité moto :</Heading>
    <SimpleGrid
        columns={{ base: 1, lg:3 }}
        gap={ 10 }
    >
      {
          data.map( (item,i) => 
            <Box
                // as={ Button }
                p='1rem'
                cursor='pointer'
                borderRadius='3px'
                border='solid 2px'
                borderColor='gray.50'
                _hover={{
                    border:'solid 2px',
                    borderColor:'gray.100'
                }}
            >
                <picture>
                    <source
                        srcSet={i=== 0 ? th1webp : i=== 1 ? th2webp : th3webp}
                        type='image/webp'
                    />
                    <source
                        srcSet={i=== 0 ? th1jpg : i=== 1 ? th2jpg : th3jpg}
                        type='image/jpeg'
                    />
                    <Image
                        loading='lazy'
                        src={th1jpg}
                        alt='MrMoto'
                        h='140px'
                        w='100%'
                        objectFit='cover'
                    />
                </picture>
                <Text
                    h='5rem'
                >
                { item.title }
                </Text>
                <Stack
                    fontSize={{ base:'12px', lg:'14px'}}
                    color='yellow.700'
                    isInline>
                    <Text>{ item.date }</Text>
                    <Text>{ item.category }</Text>
                </Stack>
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
