import { CSSProperties, MouseEventHandler } from 'react';
import classes from './FieldView.module.css';

interface FieldViewProps {
  label: string;
  value?: string;
  placeHolder?: string;
  disableValue?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  styles: CSSProperties | undefined;
}

export default function FieldView({ label, value, placeHolder = '-', disableValue, onClick, styles }: FieldViewProps) {
  return (
    <div style={styles} className={classes.fieldView}>
      <div className={classes.label}>{label}</div>
      <div className={`${classes.value} ${disableValue ? classes.disableValue : ''}`} onClick={onClick}>
        {value || placeHolder}
      </div>
    </div>
  );
}
