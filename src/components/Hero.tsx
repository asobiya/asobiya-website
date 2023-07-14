import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'50vh'}
      backgroundImage={'/images/Hero.png'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    ></Flex>
  )
}
