import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <>
      <Box id="top-bar" bg="gray.800" w="100%" p={4} shadow='dark-lg'>
        <Flex bg="gray.800">
          <Box id="logo" color="teal.200" bg="gray.800" >
            <Link to='/'>Debraj Kundu</Link>
          </Box>
          <Spacer bg="gray.800"/>
          <Center id='nav-link-container' bg="gray.800">
            <Box className='nav-links' bg="gray.800" ><Link to='/about'>About</Link></Box>
            <Box className='nav-links' bg="gray.800" ><Link to='/project' >Projects</Link></Box>
            <Box className='nav-links' bg="gray.800" ><Link to='/contact'>Contact</Link></Box>
          </Center>
        </Flex>
      </Box>
    </>
  )
}

export default TopBar
