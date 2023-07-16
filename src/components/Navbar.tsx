import { ReactNode, useRef, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = [
  { label: 'About', href: '/about' },
  { label: 'Members', href: '/members' },
  { label: 'Discord', href: 'https://discord.com/invite/R4BFAgTVYx' },
  { label: 'Contact', href: 'https://forms.gle/GYXm5wmJfSbbERwTA' },
]

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontSize="xl"
    color={useColorModeValue('black', 'white')}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
  >
    {children}
  </Link>
)

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        px={4}
        width={'full'}
        position={isScrolled ? 'fixed' : 'absolute'}
        top={isScrolled ? 0 : '-100px'}
        left={0}
        zIndex={isScrolled ? 'sticky' : 'auto'}
        boxShadow={isScrolled ? 'md' : 'none'}
        transition="top 0.3s ease-in-out"
        ref={scrollRef}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
