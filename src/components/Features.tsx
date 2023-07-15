import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'

export default function SplitWithImage() {
  return (
    <Container maxW={'100%'} py={250} px={{ base: 5, md: 20 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex alignItems="center" justifyContent="flex-start" minHeight="100%">
          <Stack spacing={4}>
            <Heading>Welcome to asobiya</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              asobiyaへようこそ
            </Text>
          </Stack>
        </Flex>

        <Flex alignItems="center" justifyContent="flex-end" minHeight="100%">
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={'./images/features.png'}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
