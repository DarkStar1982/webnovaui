import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './PhoenixIcons_typeOutlineNameCl.module.css';
import { VerctorIcon } from './VerctorIcon';

interface Props {
  className?: string;
}
/* @figmaId 17209:7586 */
export const PhoenixIcons_typeOutlineNameCl: FC<Props> = memo(function PhoenixIcons_typeOutlineNameCl(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.verctor}>
        <VerctorIcon className={classes.icon} />
      </div>
    </div>
  );
});
