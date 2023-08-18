import { Box, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Container } from '../components/Container'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import AboutAsobiya from '@/components/AboutAsobiya'

const AboutPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <AboutAsobiya />
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default AboutPage
