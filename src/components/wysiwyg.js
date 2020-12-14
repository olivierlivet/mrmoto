import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'

const Wysiwyg = ({ siteTitle }) => (
  <Stack spacing={ 10 }>
    <Heading as="h2">Qui sommes-nous ?</Heading>
 
<Text>
   Nous sommes des passionnés de moto qui débutent dans le blogging ! Notre credo ? Mettre à contribution notre expérience pour vous proposer des guides et avis sur des produits qui sont les plus adaptés pour nous les motards.

</Text>
 
  
<Heading as="h2">
    Comment le site fonctionne ?

 </Heading>
  
 <Text>
    Chaque équipement moto de base est déclinable en des milliers de modèles différents ! L’idée est donc de vous guider sur les fonctions de base qui sont communément attendues pour un type d’équipement. Vous remarquerez que nous sommes toujours à cheval sur la sécurité et que nous aimons bien rappeler l’importance de choisir en fonction de ce critère. Par habitude nous regardons la matière, les protections, la saisonnalité de l’équipement afin que vous puissiez être informé au maximum sur ce que vous désirez.

 </Text>
 <Text>
    Bien sûr nos sélections sont très subjectives mais nous faisons attention de toujours prendre des choses que nous pourrions acheter pour nous ou notre conjointe ! Car oui il est essentiel de penser à nos amies motardes qui sont de plus en plus nombreuses. Grâce à notre menu déroulant vous trouverez aisément les différentes catégories que nous avons créé. A cela s’ajoute une partie blog plus générale ou des news et nouveautés sont présentées sur le monde de la moto.

 </Text>
 <Text>
    Petit Disclaimer : Nous ne sommes pas des agents étatiques, nous avons pris ce nom par pur hasard car nous le trouvions sympathique. Nos articles sont bien rédigés par nous même et n’ont pas vocation à porter un message public. Cependant nous aimons rappeler l’importance d’être bien équipé à moto et de respecter les autres usagers.
 </Text>
 
  
 <Heading as="h2">    Pourquoi avoir décidé d’écrire sur la moto ?</Heading>

  
 <Text>
    Notre expérience nous a montré que nous n’avions pas toujours les bons conseils lorsque nous cherchions un casque, des gants ou encore un blouson. De cette idée est née le projet de se lancer sur le web et de proposer des présentations d’articles qualitatifs. Ce qui est bien c’est qu’on est libre de trouver ce qui nous plait et de le mettre en avant. Pour faire les choses bien il faut que nous trouvions d’abord les articles intéressants, que nous les comparions à d’autres et que nous vous fassions une petite explication de ses caractéristiques.

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
