import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={14}
      h={14}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        pt={1}
        pb={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image
          boxSize="200px"
          objectFit="cover"
          src="/images/asobiya.svg"
          alt="asobiya"
        />

        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Discord'}
            href={'https://discord.com/invite/R4BFAgTVYx'}
          >
            <FaDiscord fontSize="1.5em" />
          </SocialButton>

          <SocialButton
            label={'Twitter'}
            href={'https://twitter.com/asobiya_dao'}
          >
            <FaTwitter fontSize="1.5em" />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/asobiya_dao/'}
          >
            <FaInstagram fontSize="1.5em" />
          </SocialButton>

          <SocialButton
            label={'YouTube'}
            href={'https://www.youtube.com/channel/UCjGmgBPlLTOKSsXiqToZIKA'}
          >
            <FaYoutube fontSize="1.5em" />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
