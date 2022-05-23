import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <>
      <Box id="top-bar" bg="gray.800" w="100%" p={4} shadow='dark-lg'>
        <Flex>
          <Box id="logo" color="teal.200" >
            <Link to='/'>Debraj Kundu</Link>
          </Box>
          <Spacer/>
          <Center id='nav-link-container'>
            <Box className='nav-links' ><Link to='/about'>About</Link></Box>
            <Box className='nav-links' ><Link to='/project' >Projects</Link></Box>
            <Box className='nav-links' ><Link to='/contact'>Contact</Link></Box>
          </Center>
        </Flex>
      </Box>
    </>
  )
}

export default TopBar
