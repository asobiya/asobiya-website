import { Flex, useColorModeValue } from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'80vh'}
      backgroundImage={'/images/logo.svg'}
      style={useColorModeValue(
        { filter: 'invert(0%)' },
        { filter: 'invert(100%)' }
      )}
      backgroundSize={['contain', 'contain', 'auto']}
      backgroundPosition={'center center'}
      backgroundRepeat={'no-repeat'}
    ></Flex>
  )
}
