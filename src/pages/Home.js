import { VStack, Divider, StackDivider } from '@chakra-ui/react'
import Footer from '../components/footer'
import TopBar from '../components/TopBar'
import HomeContent from '../components/HomeContent'

const Home = () => {
  //    colorMode = 'Dark'
  return (
    <VStack >
      <TopBar />
      <StackDivider p={2}/>
      <HomeContent/>
      <Divider borderColor='grey.600' pt={6} />
      <Footer />
    </VStack>
  )
}

export default Home
