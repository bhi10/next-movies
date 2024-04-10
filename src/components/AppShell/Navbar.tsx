'use client';

import { Stack, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconDeviceTv, IconHome2, IconMoon, IconMovie, IconSun, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Navbar.module.css';
import NavbarLink from './NavbarLink';

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

interface NavbarProps {
  pathName: string;
}

export default function Navbar({ pathName = '' }: NavbarProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const onThemeChange = () => {
    const value = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(value);
  };

  const links = drawerItems.map((item, index) => (
    <Link href={item.href} key={index}>
      <NavbarLink icon={item.icon} label={item.label} active={pathName === item.name}></NavbarLink>
    </Link>
  ));

  return (
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
  );
}
