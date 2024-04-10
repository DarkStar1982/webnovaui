import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../_resets.module.css';
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
/* @figmaId 17235:9900 */
export const TextParagraph: FC<Props> = memo(function TextParagraph(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.text != null ? (
        props.text?.text
      ) : (
        <div className={classes.text}>
          Lorem ipsum dolor sit amet, vince adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      )}
      <div className={`${props.classes?.minWidthChangeSizeHere || ''} ${classes.minWidthChangeSizeHere}`}>
        <div className={`${props.classes?._ignore || ''} ${classes._ignore}`}></div>
        <div className={`${props.classes?._ignore2 || ''} ${classes._ignore2}`}></div>
      </div>
    </div>
  );
});
