import { FC } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
interface Props {
  toggle: () => void
  isOpen: boolean
}
const MenuToggle: FC<Props> = ({ toggle, isOpen }) => {
  const { colorMode } = useColorMode()
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? (
        <CloseIcon color={colorMode === 'light' ? 'black' : 'white'} />
      ) : (
        <HamburgerIcon color={colorMode === 'light' ? 'black' : 'white'} />
      )}
    </Box>
  )
}
export default MenuToggle
