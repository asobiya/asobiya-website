import { Flex, Image, useColorModeValue } from '@chakra-ui/react'

const Header = () => {
  const filter = useColorModeValue('none', 'invert(1)')

  return (
    <Flex width="50%" justifyContent="flex-start" ml="4">
      <Image
        src="/images/asobiya.svg"
        alt="asobiya"
        mt="-20px"
        style={{ filter }}
      />
    </Flex>
  )
}

export default Header
