import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  useTheme,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
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
  const theme = useTheme()
  const font = theme.fonts.heading

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        pt={5}
        pb={3}
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={'center'}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'/about'} fontSize="sm">
            About
          </Link>
          <Link href={'/members'} fontSize="sm">
            Members
          </Link>
          <Link href={'https://discord.gg/asobiya'} fontSize="sm">
            Discord
          </Link>
          <Link href={'https://forms.gle/GYXm5wmJfSbbERwTA'} fontSize="sm">
            Contact
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
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
          <Text fontFamily={font} fontSize="sm">
            asobiya
          </Text>

          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'Discord'}
              href={'https://discord.com/invite/R4BFAgTVYx'}
            >
              <FaDiscord />
            </SocialButton>

            <SocialButton
              label={'Twitter'}
              href={'https://twitter.com/asobiya_dao'}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={'Instagram'}
              href={'https://www.instagram.com/asobiya_dao/'}
            >
              <FaInstagram />
            </SocialButton>

            <SocialButton
              label={'YouTube'}
              href={'https://www.youtube.com/channel/UCjGmgBPlLTOKSsXiqToZIKA'}
            >
              <FaYoutube />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
