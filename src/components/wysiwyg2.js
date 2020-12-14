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

const Wysiwyg = ({ siteTitle }) => (
   <Stack spacing={10}>
      <Heading as="h2">Qu’est-ce que nous comparons sur monsieur moto?</Heading>
      <Text>
         Nous avons fait le pari que nous parlerons de tout ce qui entoure la moto! C’est un travail fastidieux, surtout avec une vie à côté mais c’est un challenge qui nous motive. Vous verrez plus bas les différentes catégories principales que nous avons décidé d’aborder. Nous sommes avant tout spécialisé pour dénicher les meilleurs équipements moto en France.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Les casques moto : la sécurité avant tout</Heading>
      <Text>
         Quand nous choisissons des casques moto nous faisons toujours attention à l’homologation de ces derniers. Lorsque ce ne sont pas des casque homologués, chose qui peut arriver pour des casques de collectionneurs, nous le signalons ou nous ne mettons pas en avant ce produit ! Petit rappel, quand on achète un équipement moto il est très important de se renseigner si ce dernier est bien au normes.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Les gants moto : un équipement à ne pas négliger</Heading>
      <Text>
         Nous mettons en avant cet ami du motard car nous voyons souvent des personnes rouler sans, surtout sur des petites cylindrées en milieu urbain. C’est un comportement très risqué ! Les mains sont la partie du corps qui va souvent toucher le sol en premier du fait de l’instinct qui nous pousse à nous amortir en tombant. Sans gants c’est la catastrophe assurée. Pensez toujours à partir bien équipé ! Les gants moto à privilégier sont présentés par nos soins sur notre blog.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Le blouson moto : la seconde peau du motard</Heading>
      <Text>
         Un blouson contre le froid mais surtout une protection contre les projections et les chutes. Nous avons toujours pris soin d’entretenir notre cuir et de veiller à ne pas partir sans les coques protectrices après l’avoir nettoyé. Sans son blouson un motard doit se sentir nu et fragile face au bitume. Alors un petit conseil, ne partez jamais sans un bon blouson moto adapté à la saison !
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Le bloque roue : un outil pratique pour bosser sur sa moto</Heading>
      <Text>
         Quand vous avez envie de bosser sur votre bolide ou de changer une pièce, il est utile de pouvoir bien ancrer sa moto au plancher des vaches. Pour cela un bloque roue moto rend de fiers services! Cet outil est accessible et facile à prendre en main, nous en avons personnellement un chez nous. Il permet également de ranger facilement sa moto dans son garage.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>La table élévatrice : l’outil ultime pour travailler sur le moteur</Heading>
      <Text>
         Extrêmement pratique quand vous avez envie d’entretenir votre moteur ou même de changer des pièces, la table élévatrice sera essentielle pour limiter les risques. C’est un accessoire très pratique pour avoir une bonne visibilité sur ce que l’on fait et ne pas se casser le dos ! Ce qu’on apprécie c’est qu’en ligne ces dernières sont très abordables et évitent de nombreux soucis.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>La caméra embarquée : pour filmer ses escapades</Heading>
      <Text>
         Combien de fois avons nous raconté nos sorties en moto avec les potes, parlé des choses que nous avions vu sans jamais pouvoir le retranscrire fidèlement? La caméra moto embarquée nous a permit de faire cela très facilement ! En plus de cela elle est un allié lors d’un accrochage car elle permet d’avoir une preuve de ce qu’il s’est passé.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Les airbag moto : La protection indispensable en moto</Heading>
      <Text>
         A moto, les chutes interviennent très souvent à grande vitesse. Contre cela nous vous conseillons de porter un gilet airbag moto en toutes circonstances. Il vous protègera efficacement en se gonflant avant que vous ne chutiez. N’hésitez pas à consulter notre page pour en savoir plus.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>La combinaison moto : une garantie supplémentaire</Heading>
      <Text>
         Sur circuit, mais aussi sur route de plus en plus de motards et motardes s’équipent des meilleures combinaisons moto afin de se protéger au maximum. Découvrez notre top 5 des meilleures ainsi que nos pages produit dédiées pour en savoir plus à propos des combinaisons.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Les bottes moto : un des équipements les plus important</Heading>
      <Text>
         Petit ou long trajet, il est impensable pour nous de ne pas être équipé comme il se doit. Les bottes moto font partie du panel d’équipement qu’il est nécessaire de porter sur la route. Je vous invite à venir découvrir notre sélection des bottes moto du moment que nous avons voulu vous présenter !
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Nous comparons les équipements pour voiture :</Heading>
      <Text>
         Monsieur Moto ne se limite plus à la moto mais aussi aux automobilistes. Nous voulons aider le plusgrands nombres de Francophone à bien choisir leurs équipements auto afin qu’ils puissent faire la meilleure décision d’achat.
         Retrouver tous nos comparatifs et articles sur notre site internet.
      </Text>

      <Heading as="h3" fontSize={{ base:'18px', lg:'22px', xl:'24px' }}>Nous comparons les scooters électriques :</Heading>
      <Text>
         Le scooter électrique est une révolution en marche dans les grandes métropôles. Nous tenions absolument à aborder le sujet en proposant notre top 10 des meilleurs scooteurs électriques. Le but est d’aider nos utilisateurs à faire le bon choix sur un nouveau type de véhicule, relativement technique.
      </Text>

   </Stack>
)

Wysiwyg.propTypes = {
   siteTitle: PropTypes.string,
}

Wysiwyg.defaultProps = {
   siteTitle: ``,
}

export default Wysiwyg
