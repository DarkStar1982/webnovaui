import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PhoenixIcons_typeOutlineNameSe.module.css';
import { UnionIcon } from './UnionIcon';

interface Props {
  className?: string;
}
/* @figmaId 17209:4828 */
export const PhoenixIcons_typeOutlineNameSe: FC<Props> = memo(function PhoenixIcons_typeOutlineNameSe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.union}>
        <UnionIcon className={classes.icon} />
      </div>
    </div>
  );
});
