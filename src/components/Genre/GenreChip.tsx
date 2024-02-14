import { MouseEvent } from 'react';
import PillButton from '../Base/PillButton';

interface GenreChipProps {
  id: number;
  name: string;
  color?: string;
}

export default function GenreChip({ id, name, color }: GenreChipProps) {
  const clickHandler = (event: MouseEvent) => {
    // TODO: redirect to genre list page
    console.log('Genre Chip click', id);
  };

  return <PillButton size="compact-sm" label={name} color={color} onClick={clickHandler}></PillButton>;
}
