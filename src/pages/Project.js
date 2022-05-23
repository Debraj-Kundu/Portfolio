import { VStack, Divider, StackDivider } from '@chakra-ui/react'
import Footer from '../components/footer'
import ProjectContent from '../components/ProjectContent'
import TopBar from '../components/TopBar'

const Project = () => {
  return (
    <VStack>
      <TopBar />
      <StackDivider p={2} />
      <ProjectContent/>
      <Divider borderColor="grey.600" pt={6} />
      <Footer />
    </VStack>
  )
}

export default Project
