import { extendTheme } from '@chakra-ui/react'
const customFontPath = '/fonts/shokakiutage.ttf'

const theme = extendTheme({
  fonts: {
    body: 'shokakiutage, sans-serif',
    heading: 'shokakiutage, sans-serif',
  },
  styles: {
    global: {
      '@font-face': {
        fontFamily: 'shokakiutage',
        src: `url(${customFontPath})`,
      },
    },
  },

  fontSizes: {
    sm: '28px',
    md: '32px',
    lg: '36px',
    xl: '40px',
    '2xl': '48px',
    '3xl': '56px',
    '4xl': '64px',
    '5xl': '72px',
    '6xl': '80px',
    '7xl': '96px',
    '8xl': '112px',
    '9xl': '128px',
  },

  colors: {
    gray: {
      50: 'white',
    },
  },
})

export default theme
