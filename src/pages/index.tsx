import { NextPage } from 'next'
import Hero from '../components/Hero'
import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const Index: NextPage = () => (
  <Container height="500vh">
    <Navbar />
    <DarkModeSwitch />
    <Carousel />
    <Features />

    <Footer />
  </Container>
)

export default Index
