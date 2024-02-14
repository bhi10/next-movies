import { Button } from '@mantine/core';
import { MouseEvent } from 'react';
import classes from './PillButton.module.css';

type ChipSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'compact-xs' | 'compact-sm' | 'compact-md' | 'compact-lg' | 'compact-xl';

interface PillButtonProps {
  label: string;
  size?: ChipSize;
  color?: string;
  onClick?: (event: MouseEvent) => void;
}

export default function PillButton({ size = 'compact-md', label = '', color, onClick }: PillButtonProps) {
  const classMap = {
    xs: classes.xs,
    sm: classes.sm,
    md: classes.md,
    lg: classes.lg,
    xl: classes.xl,
    'compact-xs': classes.compactxs,
    'compact-sm': classes.compactsm,
    'compact-md': classes.compactmd,
    'compact-lg': classes.compactlg,
    'compact-xl': classes.compactxl,
  };
  return (
    <Button className={classMap[size]} size={size} color={color} onClick={onClick}>
      {label}
    </Button>
  );
}
