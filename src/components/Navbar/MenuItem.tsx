import Link from 'next/link';
import { Text, useColorMode } from '@chakra-ui/react';

const MenuItem = ({ children, to = '/' }) => {
  const { colorMode } = useColorMode();
  return (
    <Link href={to}>
      <Text cursor="pointer" display="block" color={colorMode === 'light' ? 'black' : 'white'}>
        {children}
      </Text>
    </Link>
  );
};
export default MenuItem;
