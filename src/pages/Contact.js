import { VStack, Divider, StackDivider } from '@chakra-ui/react'
import Footer from '../components/footer'
import TopBar from '../components/TopBar'
import HomeContent from '../components/HomeContent'

const Home = () => {
  
  return (
    <VStack >
      <TopBar />
      <StackDivider p={2}/>
      <Divider borderColor='grey.600' pt={6} />
      <Footer />
    </VStack>
  )
}

export default Home
