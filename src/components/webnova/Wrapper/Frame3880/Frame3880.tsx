import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame3880.module.css';
import { UniconIconSet_NameTrophy } from './UniconIconSet_NameTrophy/UniconIconSet_NameTrophy';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  label?: string;
  url?: string;
  style?: any;
}
/* @figmaId 17235:34702 */
export const Frame3880: FC<Props> = memo(function Frame3880(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={props.style}>
      <UniconIconSet_NameTrophy
        className={classes.uniconIconSet}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.phoenixButtons}>
        <a href={props.url} className={classes.label}>{props.label}</a>
      </div>
    </div>
  );
});
