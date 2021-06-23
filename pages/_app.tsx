import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
