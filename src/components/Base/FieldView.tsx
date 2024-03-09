import { Text, Title } from '@mantine/core';
import { CSSProperties, MouseEventHandler } from 'react';
import classes from './FieldView.module.css';

interface FieldViewProps {
  label: string;
  value?: string;
  placeHolder?: string;
  disableValue?: boolean;
  dark?: boolean;
  styles: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

/**
 * Functional component for displaying a labeled field view.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {string} props.label - The label for the field.
 * @param {string} [props.value] - The value to be displayed in the field. Defaults to an empty string.
 * @param {string} [props.placeHolder] - The placeholder text to be displayed if the value is not provided. Defaults to '-'.
 * @param {boolean} [props.disableValue] - If true, the value will be displayed with reduced opacity to indicate it is disabled.
 * @param {boolean} [props.dark] - If true, applies dark styling to the component. Useful for dark background.
 * @param {CSSProperties} [props.styles] - Custom styles to be applied to the component.
 * @param {MouseEventHandler<HTMLDivElement>} [props.onClick] - Event handler for click events on the component.
 * @returns {JSX.Element} The rendered FieldView component.
 *
 * @example
 * // Example usage of FieldView component
 * <FieldView
 *   label="Field Label"
 *   value="Field Value"
 *   placeHolder="-"
 *   disableValue={false}
 *   dark={true}
 *   styles={{ backgroundColor: 'black' }}
 *   onClick={(event) => console.log('Clicked!', event)}
 * />
 */
// export default function FieldView

function FieldView({ label, value, placeHolder = '-', disableValue, onClick, styles, dark }: FieldViewProps): JSX.Element {
  return (
    <div style={styles} className={classes.fieldView}>
      <Title order={6} c={dark ? 'dark.0' : ''} opacity={0.6}>
        {label}
      </Title>
      <Text size="md" c={dark ? 'dark.0' : ''} opacity={disableValue ? 0.36 : 'inherit'} onClick={onClick}>
        {value || placeHolder}
      </Text>
    </div>
  );
}

export default FieldView;
