import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import classes from './TextParagraph.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    _ignore?: string;
    _ignore2?: string;
    minWidthChangeSizeHere?: string;
  };
  text?: {
    text?: ReactNode;
  };
}
export const TextParagraph: FC<Props> = memo(function TextParagraph(props = {}) {
  return (
    <div className={`${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? (props.text?.text) : ("")}
      <div className={`${props.classes?.minWidthChangeSizeHere || ''} ${classes.minWidthChangeSizeHere}`}>
        <div className={`${props.classes?._ignore || ''} ${classes._ignore}`}></div>
        <div className={`${props.classes?._ignore2 || ''} ${classes._ignore2}`}></div>
      </div>
    </div>
  );
});
