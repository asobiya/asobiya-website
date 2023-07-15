import { Flex, Image, useColorModeValue } from '@chakra-ui/react'

const Header = () => {
  const filter = useColorModeValue('none', 'invert(1)')

  return (
    <Flex width="65%" justifyContent="center" ml="24">
      <Image
        src="/images/asobiya.svg"
        alt="asobiya"
        mt="-200px"
        style={{ filter }}
      />
    </Flex>
  )
}

export default Header
