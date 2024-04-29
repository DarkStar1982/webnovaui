import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import classes from './AppStartButton.module.css';

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

export const AppStartButton: FC<Props> = memo(function AppStartButton(props = {}) {

  return (
    <button className={`${props.classes?.root || ''} ${props.className || ''} ${classes.root}`} onClick={props.onClick}>
      {props.text?.label != null ? props.text?.label : ""}
    </button>
  );
});
