import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Badges_SizeH6StyleSolidColorWa.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    warning?: ReactNode;
  };
}
/* @figmaId 17235:2515 */
export const Badges_SizeH6StyleSolidColorWa: FC<Props> = memo(function Badges_SizeH6StyleSolidColorWa(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.warning != null ? props.text?.warning : <div className={classes.warning}>Warning</div>}
    </div>
  );
});
