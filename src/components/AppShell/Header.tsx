'use client'

import { logo } from '@/utils/constants';
import { Burger, Container, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container fluid size="md" className={classes.inner}>
        <Image src={logo} height={28}></Image>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Header;
