import { ReactNode } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const links = [
  { text: 'Home', url: '/' },
  { text: 'Members', url: '/members' },
  { text: 'About', url: '/about' },
  { text: 'Contact', url: 'https://forms.gle/GYXm5wmJfSbbERwTA' },
]

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <NextLink href={href}>
    <Button
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Button>
  </NextLink>
)

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={'center'}>
            <Box w={24} h={10} marginLeft={8} marginRight={7}>
              <Image
                src="/images/logo.svg"
                alt="logo"
                height="100%"
                width="100%"
                style={useColorModeValue(
                  { filter: 'invert(0%)' },
                  { filter: 'invert(100%)' }
                )}
              />
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {links.map((link) => (
                <NavLink key={link.url} href={link.url}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </Flex>
          <Flex alignItems={'center'}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.url} href={link.url}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
