import { MouseEvent } from 'react';
import PillButton from '../Base/PillButton';

interface GenreChipProps {
  id: number;
  name: string;
  color?: string;
}

/**
 * Represents a genre chip that can be used to display and interact with a genre.
 *
 * @component
 *
 * @param {object} props - The properties of the GenreChip component.
 * @param {number} props.id - The unique identifier for the genre.
 * @param {string} props.name - The name of the genre to be displayed.
 * @param {string} [props.color] - The color associated with the genre chip (optional).
 * @returns {JSX.Element} - A React component representing the GenreChip.
 */
function GenreChip({ id, name, color }: GenreChipProps): JSX.Element {
  /**
   * Click event handler for the genre chip.
   *
   * @param {MouseEvent} event - The click event object.
   * @returns {void}
   * @todo Implement redirection to the genre list page.
   */
  const clickHandler = (event: MouseEvent): void => {
    // TODO: redirect to genre list page
    console.log('Genre Chip click', id);
  };

  return <PillButton size="compact-sm" label={name} color={color} onClick={clickHandler}></PillButton>;
}

export default GenreChip;
