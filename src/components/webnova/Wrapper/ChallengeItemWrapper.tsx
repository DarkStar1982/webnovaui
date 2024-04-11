import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import resets from './_resets.module.css';
import { PhoenixButtonsDark_TypeDashing } from './PhoenixButtonsDark_TypeDashing/PhoenixButtonsDark_TypeDashing';
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

/* @figmaId 17248:26834 */
export const ChallengeItemWrapper: FC<Props> = memo(function Wrapper(props = {}) {
  const handleClick = () => {

    let cid = (props.challengeId) ? props.challengeId -1 : 0;
    let url = "/pages/mission/" + cid;
    window.location.href = url;
  }

  return (
    <div className={`${resets.clapyResets} ${classes.root} challenge dark card mb-3`}>
      <div className={classes.content3}>
        <div className={classes.cardBody}>
          <div className={classes.cardTitle}>
            <img src={props.icon} className={classes.uniconIconSet} />
            <div className={classes.text4}>{props.name}</div>
            <div className={classes.frame50}>
              <div className={classes.cardSubtitle}>
                <div className={classes.frame502}>
                  <div className={classes.text5}>Data type:</div>
                  <div className={classes.text6}>{props.dataType}</div>
                </div>
                <div className={classes.frame4115}>
                  <div className={classes.text7}>
                    {/* Location: */}
                  </div>
                  <div className={classes.text8}>{props.location}</div>
                </div>
              </div>
              <div className={classes.buttonList}>
                <PhoenixButtonsDark_TypeDashing
                  className={classes.phoenixButtonsDark}
                  text={{
                    label: <div className={classes.label}>Start challenge</div>,
                  }}
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
