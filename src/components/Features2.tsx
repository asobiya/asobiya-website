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
    <Container maxW={'100%'} py={200} px={{ base: 5, md: 20 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Image
          rounded={'md'}
          alt={'feature2 image'}
          src={'./images/features2.jpg'}
          objectFit={'cover'}
        />

        <Flex alignItems="center" justifyContent="flex-end" minHeight="100%">
          <Stack spacing={4}>
            <Heading>遊んで暮らせる世界を一緒につくろう！</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              asobiyaは「遊んで暮らせる世界をつくるDAO」を目指すweb3コミュニティです。
            </Text>
          </Stack>
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
