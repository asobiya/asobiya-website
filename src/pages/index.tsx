import { NextPage } from 'next'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Features from '../components/Features'
import Features2 from '../components/Features2'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'

const Index: NextPage = () => (
  <Container>
    <Navbar />
    <DarkModeSwitch />
    <Heading>asobiyaへようこそ</Heading>
    <Features />
    <Features2 />
    <Footer />
  </Container>
)

export default Index
