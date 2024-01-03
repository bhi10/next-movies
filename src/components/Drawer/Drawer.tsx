'use client';

import { Stack, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import {
  IconDeviceTv,
  IconHome2,
  IconMoon,
  IconMovie,
  IconSun,
  IconUsers,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';
import classes from './Drawer.module.css';
import DrawerLink from './DrawerLink';

interface DrawerItems {
  icon: typeof IconHome2;
  label: string;
  href: string;
}

const drawerItems: DrawerItems[] = [
  { icon: IconHome2, label: 'Home', href: '/' },
  { icon: IconMovie, label: 'Movies', href: '/movies' },
  { icon: IconDeviceTv, label: 'TV Shows', href: '/tv' },
  { icon: IconUsers, label: 'People', href: '/people' },
];

export default function Drawer() {
  const [active, setActive] = useState(0);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const onItemClick = (item: DrawerItems, index: number) => {
    setActive(index);
  };

  const onThemeChange = () => {
    const value = computedColorScheme === 'light' ? 'dark' : 'light';
    setColorScheme(value);
  };

  const links = drawerItems.map((item, index) => (
    <Link href={item.href}>
      <DrawerLink
        key={index}
        icon={item.icon}
        label={item.label}
        active={index === active}
        onClick={() => onItemClick(item, index)}
      ></DrawerLink>
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
        <DrawerLink
          icon={computedColorScheme === 'light' ? IconMoon : IconSun}
          label={computedColorScheme === 'light' ? 'Dark' : 'Light'}
          onClick={onThemeChange}
        />
      </Stack>
    </nav>
  );
}
