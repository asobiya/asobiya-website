import { Heading, Box } from '@chakra-ui/react'

const MyHeading = ({ children }) => (
  <Box width="100%" textAlign="center" py="200" ml="24">
    <Heading as="h1" size="3xl">
      {children}
    </Heading>
  </Box>
)

export default MyHeading
