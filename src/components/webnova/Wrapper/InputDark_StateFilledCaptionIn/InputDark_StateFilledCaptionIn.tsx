import { memo } from 'react';
import type { FC, ReactNode } from 'react';

// import resets from './_resets.module.css';
import classes from './InputDark_StateFilledCaptionIn.module.css';

interface Props {
  className?: string;
  classes?: {
    placeholderCaption?: string;
    root?: string;
  };
  text?: {
    caption?: ReactNode;
    label?: ReactNode;
  };
  style?: any;
  id?: string;
}
/* @figmaId 17209:21918 */
export const InputDark_StateFilledCaptionIn: FC<Props> = memo(function InputDark_StateFilledCaptionIn(props = {}) {
  return (
    <div className={` ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`} style={props.style} id={props.id}>
      <div className={`${props.classes?.placeholderCaption || ''} ${classes.placeholderCaption}`}>
        {props.text?.caption != null ? props.text?.caption : <div className={classes.caption}>Input Caption</div>}
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Filled</div>}
      </div>
    </div>
  );
});
