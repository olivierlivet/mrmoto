import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
import Hero from '../components/hero'
import NewsSummary from '../components/newsSummary'
import Wysiwyg from '../components/wysiwyg'

const IndexPage = () => (
  <Layout>
    <SEO title="Mr Moto - Homepage" />
    <Header />
    <Hero />
    <NewsSummary limite={3} />
    <Wysiwyg />
    <NewsSummary  limite={12} />
  </Layout>
)

export default IndexPage
