import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../_resets.module.css';
import classes from './UniconIconSet_NamePlane.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 17235:1840 */
export const UniconIconSet_NamePlane: FC<Props> = memo(function UniconIconSet_NamePlane(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vector || ''} ${classes.vector}`}>
        {props.swap?.vector || <VectorIcon className={classes.icon} />}
      </div>
    </div>
  );
});
