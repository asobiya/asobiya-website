import { NextPage } from 'next'
import Hero from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Features from '../components/Features'
import Features2 from '../components/Features2'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import { Box } from '@chakra-ui/react'

const Index: NextPage = () => (
  <Container>
    <Navbar />
    <DarkModeSwitch />
    <Heading>asobiyaへようこそ</Heading>
    <Hero />
    <Box my={100}>
      <Features />
    </Box>
    <Features2 />
    <Footer />
  </Container>
)

export default Index
