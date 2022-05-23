import { Box, Flex, Divider, Text } from '@chakra-ui/react'
import aboutConfig from '../config/aboutConfig'

const AboutContent = () => {
  function renderEdu(course, school, date, grade, i) {
    return (
      <Flex pt={5} key={i} direction="column">
        <Text fontSize="20">{course}</Text>
        <Flex color="white" justifyContent="space-between">
          <Text fontSize="16" color="teal.200">
            {school}{' '}
            <Text as="span" color="white" fontSize="12">
              {date}
            </Text>{' '}
          </Text>
          <Text as="span" color="teal.200" fontSize="14">
            {grade}
          </Text>
        </Flex>
      </Flex>
    )
  }

  function renderCerti(name, link, i) {
    return (
      <Box pt={4} key={i}>
        <Text fontSize="18">{name}</Text>
        <Text fontSize="14" color="teal.200">
          Coursera
        </Text>
        <Text fontSize="11" color="blue.200">
          <a href={link} rel="noreferrer" target="_blank">
            {link}
          </a>
        </Text>
      </Box>
    )
  }

  function renderSkill(item, i) {
    return (
      <Box
        as="span"
        bg="teal.400"
        borderRadius="md"
        key={i}
        p={[1, 2]}
        m={1}
        mt={4}
      >
        <Text as="button" fontSize="18">
          {item}
        </Text>
      </Box>
    )
  }

  return (
    <Flex gap={16} wrap="wrap" justify="center">
      <Box
        maxW="2xl"
        bg="gray.700"
        borderWidth="1px"
        p={6}
        borderRadius="2xl"
        overflow="hidden"
        shadow="2xl"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="30" color="teal.200">
          EDUCATION 📖
        </Text>
        <Divider borderColor="gray.200" mt={1} mb={0} />
        {aboutConfig[0].items.map((item, i) => {
          return renderEdu(item.course, item.school, item.date, item.grade, i)
        })}
      </Box>
      <Box
        maxW="2xl"
        bg="gray.700"
        borderWidth="1px"
        p={6}
        borderRadius="2xl"
        overflow="hidden"
        shadow="2xl"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="30" color="teal.200">
          CERTIFICATES 📜
        </Text>
        <Divider borderColor="gray.200" mt={1} mb={0} />
        {aboutConfig[1].items.map((item, i) => {
          return renderCerti(item.name, item.link, i)
        })}
      </Box>
      <Box
        maxW="sm"
        bg="gray.700"
        borderWidth="1px"
        p={6}
        borderRadius="2xl"
        overflow="hidden"
        shadow="2xl"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="30" color="teal.200">
          SKILLS 🧪
        </Text>
        <Divider borderColor="gray.200" mt={1} mb={0} />
        <Flex color="white" justifyContent="space-between" flexWrap="wrap">
          {aboutConfig[2].items.map((item, i) => {
            return renderSkill(item, i)
          })}
        </Flex>
      </Box>
      <Box
        maxW="sm"
        bg="gray.700"
        borderWidth="1px"
        p={6}
        borderRadius="2xl"
        overflow="hidden"
        shadow="2xl"
        display="flex"
        flexDirection="column"
      >
        <Text fontSize="30" color="teal.200">
          INTRESTS 🔭
        </Text>
        <Divider borderColor="gray.200" mt={1} mb={0} />
        <Flex color="white" justifyContent="space-between" flexWrap="wrap">
          {aboutConfig[3].items.map((item, i) => {
            return renderSkill(item, i)
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default AboutContent
