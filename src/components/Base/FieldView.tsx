import { Text, Title } from '@mantine/core';
import { CSSProperties, MouseEventHandler, useMemo, useState } from 'react';
import classes from './FieldView.module.css';

interface FieldViewProps {
  children?: React.ReactNode;
  label: string;
  value?: string;
  placeHolder?: string;
  disableValue?: boolean;
  dark?: boolean;
  lineClamp?: boolean;
  styles?: CSSProperties | undefined;
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

function FieldView({ children, label, value, placeHolder = '-', disableValue, onClick, styles, dark, lineClamp }: FieldViewProps): JSX.Element {
  const [lineClampNumber, setLineClampNumber] = useState(4);

  const aValue = useMemo(() => {
    if (typeof value === 'string' && value !== '') {
      return value.split('\n').filter(e => !!e);
    }
    return [];
  }, [value]);

  const showReadMore = lineClamp && value && lineClampNumber !== 0;

  const textContent = () => {
    if (!value) {
      return placeHolder;
    }

    if (value && aValue.length === 0) {
      return value;
    }

    return aValue.map((paragraph, index) => (
      <p key={index} className={classes.paragraph}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div style={styles} className={classes.fieldView}>
      <Title order={6} c={dark ? 'dark.0' : ''} opacity={0.6}>
        {label}
      </Title>
      {children ? (
        children
      ) : (
        <Text
          size="md"
          c={dark ? 'dark.0' : ''}
          opacity={disableValue ? 0.36 : 'inherit'}
          lineClamp={lineClamp ? lineClampNumber : 0}
          onClick={onClick}
        >
          {textContent()}
        </Text>
      )}

      {showReadMore && value && value.length > 500 ? (
        <div className={classes.read_more}>
          <a className={classes.anchor} onClick={() => setLineClampNumber(0)}>
            Read More{' '}
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default FieldView;
