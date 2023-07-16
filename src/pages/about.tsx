import { Box, Heading, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Container } from '../components/Container'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AboutPage: NextPage = () => {
  return (
    <>
      <NavBar />
      <Box p={4}>
        <Heading>Aboutページ</Heading>
        <Text>metababy</Text>
      </Box>
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default AboutPage
