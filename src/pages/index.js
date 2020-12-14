import React from "react"
import { Link } from "gatsby"

import { Stack } from '@chakra-ui/react'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
import Hero from '../components/hero'
import NewsSummary from '../components/newsSummary'
import Wysiwyg from '../components/wysiwyg'
import Wysiwyg2 from '../components/wysiwyg2'

const IndexPage = () => (
  <Layout>
    <SEO title="Mr Moto - Homepage" />
    <Stack
      spacing={10}
      shouldWrapChildren={true}
    >
      <Header />
      <Hero />
      <NewsSummary limite={3} />
      <Wysiwyg />
      <NewsSummary limite={12} />
      <Wysiwyg2 />
      <NewsSummary limite={12} />
    </Stack>

  </Layout>
)

export default IndexPage
