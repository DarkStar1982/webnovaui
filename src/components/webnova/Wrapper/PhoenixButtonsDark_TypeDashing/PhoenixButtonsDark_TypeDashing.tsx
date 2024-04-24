import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../_resets.module.css';
import classes from './PhoenixButtonsDark_TypeDashing.module.css';

interface Props {
  className?: string;
  onClick?: any;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 17355:17519 */
export const PhoenixButtonsDark_TypeDashing: FC<Props> = memo(function PhoenixButtonsDark_TypeDashing(props = {}) {

  return (
    <button className={` ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`} onClick={props.onClick}>
      {props.text?.label != null ? props.text?.label : <div className={classes.label}>Request Payout</div>}
    </button>
  );
});
