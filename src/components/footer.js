import {
  Stack,
  IconButton,
  Link,
  Box,
  Text,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import siteConfig from '../config/siteConfig'
import ReactCountryFlag from 'react-country-flag'

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
}

const Footer = () => {
  return (
    <Stack
      id="footer"
      as="footer"
      isInline
      spacing={[1, 1]}
      p={4}
      justifyContent="space-between"
      alignItems="flex-start"
      w={['100%', '85%', '80%']}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexFlow={['column-reverse', 'column-reverse']}
        justifyContent={['center', 'space-between']}
        alignItems="center"
        w="100%"
      >
        {/* <HStack> */}
        <Text
          textAlign="center"
          fontSize="sm"
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          Made in{' '}
          <ReactCountryFlag
            countryCode="IN"
            svg
            style={{
              width: '2em',
              height: '1em',
            }}
            title="IN"
          />{' '}
          by Debraj Kundu {new Date().getFullYear()}
        </Text>

        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  )
}

export default Footer
