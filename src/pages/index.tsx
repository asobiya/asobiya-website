import { NextPage } from 'next'
import Hero from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Index: NextPage = () => (
  <Container height="100vh">
    <Hero />
    <Features />
    <Footer />
    <DarkModeSwitch />
  </Container>
)

export default Index
