import { Flex } from '@mantine/core';
import React from 'react';
import classes from './HorizontalScroller.module.css';

interface HorizontalScrollerProps {
  children?: React.ReactNode;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default function HorizontalScroller({ children, gap = 'md' }: HorizontalScrollerProps) {
  return (
    <Flex className={classes.scroller} justify={'flex-start'} align={'stretch'} gap={gap}>
      {children}
    </Flex>
  );
}
