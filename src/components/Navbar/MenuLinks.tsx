import { Box, Button, Stack, useColorMode, useDisclosure } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
type Props = {
  isOpen?: boolean;
};

const MenuLinks = ({ isOpen }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { onToggle } = useDisclosure();
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}>
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/interests">Interests</MenuItem>
        <MenuItem to="/experience">Experience</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>

        <Button colorScheme="blue" variant="solid" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
