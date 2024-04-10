import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Badges_SizeH6StyleSolidColorWa } from './Badges_SizeH6StyleSolidColorWa/Badges_SizeH6StyleSolidColorWa';
import classes from './Frame3881.module.css';
import { UniconIconSet_NameRocket } from './UniconIconSet_NameRocket/UniconIconSet_NameRocket';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
  label?: string;
  url?: string;
  style?: any;
}
/* @figmaId 17235:34707 */
export const Frame3881: FC<Props> = memo(function Frame3881(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={props.style}>
      <UniconIconSet_NameRocket
        className={classes.uniconIconSet}
        classes={{ vector: classes.vector }}
        swap={{
          vector: (
            <div className={classes.vector}>
              <VectorIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.phoenixButtons}>
        <a href={props.url} className={classes.label}>{props.label}</a>
        {/* <Badges_SizeH6StyleSolidColorWa
          className={classes.badges}
          text={{
            warning: <div className={classes.warning}>3</div>,
          }}
        /> */}
      </div>
    </div>
  );
});
