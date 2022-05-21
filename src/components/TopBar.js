import { Box, Center, Flex, Spacer } from '@chakra-ui/react'

const TopBar = () => {
  return (
    <>
      <Box id="top-bar" bg="gray.800" w="100%" p={4} shadow='dark-lg'>
        <Flex>
          <Box id="logo" color="teal.200" as="button">
            Debraj Kundu
          </Box>
          <Spacer/>
          <Center id='nav-link-container'>
            <Box className='nav-links' as='button'>About</Box>
            <Box className='nav-links' as='button'>Projects</Box>
            <Box className='nav-links' as='button'>Contact</Box>
          </Center>
        </Flex>
      </Box>
    </>
  )
}

export default TopBar
