import Link from 'next/link'
import { FC } from 'react'
import { Text, useColorMode } from '@chakra-ui/react'

interface Props {
  to: string
}
const MenuItem: FC<Props> = ({ children, to = '/' }) => {
  const { colorMode } = useColorMode()
  return (
    <Link href={to}>
      <Text
        cursor="pointer"
        display="block"
        color={colorMode === 'light' ? 'black' : 'white'}
      >
        {children}
      </Text>
    </Link>
  )
}
export default MenuItem
