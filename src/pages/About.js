import { VStack, Divider, StackDivider } from '@chakra-ui/react'
import Footer from '../components/footer'
import TopBar from '../components/TopBar'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <VStack>
      <TopBar />
      <StackDivider p={2} />
      <AboutContent />
      <Divider borderColor="grey.600" pt={6} />
      <Footer />
    </VStack>
  )
}

export default About
