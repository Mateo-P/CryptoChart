import { FC } from 'react';
import { Box, Center, Image } from '@chakra-ui/react';
import Link from 'next/link';
interface Props {
  image: string;
}
const NavbarLogo: FC<Props> = ({ image }) => {
  return (
    <Center cursor="pointer">
      <Link href={'/'}>
        <Image src={image} alt="mateo perez" width={75} height={65} />
      </Link>
    </Center>
  );
};

export default NavbarLogo;
