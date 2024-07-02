import { AppShell, Burger, Group, Image, Skeleton, Stack, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDeviceTv, IconHome2, IconMoon, IconMovie, IconSun, IconUsers } from '@tabler/icons-react';
import { logo } from '@utils/constants';
import Link from 'next/link';
import NavbarLink from './NavbarLink';
import classes from './Navbar.module.css';

interface NavbarItems {
  icon: typeof IconHome2;
  label: string;
  href: string;
  name: string;
}

const drawerItems: NavbarItems[] = [
  { icon: IconHome2, label: 'Home', name: '', href: '/' },
  { icon: IconMovie, label: 'Movies', name: 'movie', href: '/movie' },
  { icon: IconDeviceTv, label: 'TV Shows', name: 'tv', href: '/tv' },
  { icon: IconUsers, label: 'People', name: 'people', href: '/people' },
];

interface BasicAppShellProps {
  pathName: string;
  children: React.ReactNode;
}

function BasicAppShell({ pathName = '', children }: BasicAppShellProps) {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const onThemeChange = () => {
    const value = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(value);
    toggle();
  };

  const links = drawerItems.map((item, index) => (
    <Link href={item.href} key={index}>
      <NavbarLink icon={item.icon} label={item.label} active={pathName === item.name} onClick={toggle}></NavbarLink>
    </Link>
  ));

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      navbar={{
        width: { base: 80 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding={{ md: 'xs', lg: 'xs', xl: 'xs' }}
      style={{ overflowX: 'hidden' }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image src={logo} height={28} alt="TMDB"></Image>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Stack justify="center" gap={0}>
              {links}
            </Stack>
          </div>

          <Stack justify="center" gap={0}>
            <NavbarLink
              icon={computedColorScheme === 'light' ? IconMoon : IconSun}
              label={computedColorScheme === 'light' ? 'Dark' : 'Light'}
              onClick={onThemeChange}
            />
          </Stack>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main pt={60}>{children}</AppShell.Main>
    </AppShell>
  );
}

export default BasicAppShell;
