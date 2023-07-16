import { NextPage } from 'next'

import { Container } from '../components/Container'

import Features from '../components/Features'
import Features2 from '../components/Features2'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import Header from '../components/Header'

const Index: NextPage = () => (
  <Container>
    <Navbar />
    <Header />
    <Features />
    <Features2 />
    <Footer />
  </Container>
)

export default Index
