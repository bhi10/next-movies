import { logo } from '@/utils/constants';
import { Container, Image } from '@mantine/core';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <Container fluid size="md" className={classes.inner}>
        <Image src={logo} height={28} alt="TMDB"></Image>
      </Container>
    </header>
  );
}

export default Header;
