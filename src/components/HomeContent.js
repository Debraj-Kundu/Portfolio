import { Box, Flex, Image, Divider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomeContent = () => {
  return (
    <Box
      bg="gray.700"
      borderWidth="1px"
      p={6}
      borderRadius="2xl"
      overflow="hidden"
      shadow="2xl"
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={4}
    >
      <Flex gap={100}>
        <Image src='assets/pro_pic.jpeg' boxSize='200px' borderRadius='28px' shadow='dark-lg' />
        <Box color="teal.200" maxW="sm" pt={5}>
          <Text fontSize='32'>Hey! 👋</Text>
          <Divider borderColor="gray.200" mt={2} mb={2} />
          <Box color="white">
            I am{' '}
            <Text as="span" fontWeight={700} color="teal.200">
              Debraj Kundu
            </Text>{' '}
            a creative guy with a passion for learning new technologies and
            strong interest in software design and development. Looking forward
            to build my career in{' '}
            <Text as="span" color="teal.200">
              {' '}
              web development.
            </Text>
            <br />
            <Divider borderColor="gray.200" mt={2} mb={2} />
          </Box>
        </Box>
      </Flex>
      <Text color="teal.200">
        <Link to='/project'>Thanks for visiting! be sure to checkout my projects 😉{' '}</Link>
      </Text>
    </Box>
  )
}

export default HomeContent
