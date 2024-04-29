import { memo } from 'react';
import type { FC } from 'react';
import { AppStartButton } from './AppStartButton/AppStartButton';
import { TextParagraph } from './TextParagraph/TextParagraph';
import classes from './Wrapper.module.css';

interface Props {
  className?: string;
  name?: string;
  dataType?: string;
  location?: string;
  description?: string;
  icon?: string;
  challengeId?: number;
}

export const AppstoreItemWrapper: FC<Props> = memo(function Wrapper(props = {}) {

  const handleClick = () => {
    let cid = (props.challengeId) ? props.challengeId -1 : 0;
    window.location.href = "/pages/mission/" + cid;
  }

  return (
    <div className={`challenge dark card mb-3 ${classes.card}`} >
      <div className={classes.content3}>
        <div className={classes.cardBody}>
          <div className={classes.cardTitle}>
            <img src={props.icon} className={classes.uniconIconSet} />
            <div className={classes.text4}>{props.name}</div>
            <div className={classes.frame50}>
              <div className={classes.cardSubtitle}>
                <div className={classes.frame502}>
                  <div className={classes.text5}>Data type: {props.dataType}</div>
                  <div className={classes.text6}>&nbsp;</div>
                </div>
                <div className={classes.frame4115}>
                  <div className={classes.text7}>
                    &nbsp;{/* Location: */}
                  </div>
                  <div className={classes.text8}>{props.location}</div>
                </div>
              </div>
              <div className={classes.buttonList}>
                <AppStartButton
                  className={classes.phoenixButtonsDark}
                  text={{ label: "Start App" }}
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
          <TextParagraph
            className={classes.cardText}
            text={{
              text: (
                <div className={classes.text}>
                  {props.description}
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
});
