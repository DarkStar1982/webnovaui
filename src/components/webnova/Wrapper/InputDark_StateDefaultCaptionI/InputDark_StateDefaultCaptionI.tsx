import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../_resets.module.css';
import classes from './InputDark_StateDefaultCaptionI.module.css';
import { PhoenixIcons_typeOutlineNameCl } from './PhoenixIcons_typeOutlineNameCl/PhoenixIcons_typeOutlineNameCl';
import { PhoenixIcons_typeOutlineNameMe } from './PhoenixIcons_typeOutlineNameMe/PhoenixIcons_typeOutlineNameMe';
import { PhoenixIcons_typeOutlineNameSe } from './PhoenixIcons_typeOutlineNameSe/PhoenixIcons_typeOutlineNameSe';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    caption?: ReactNode;
  };
}
/* @figmaId 17209:21796 */
export const InputDark_StateDefaultCaptionI: FC<Props> = memo(function InputDark_StateDefaultCaptionI(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.placeholderCaption}>
        {props.text?.caption != null ? props.text?.caption : <div className={classes.caption}>Input Caption</div>}
      </div>
    </div>
  );
});
