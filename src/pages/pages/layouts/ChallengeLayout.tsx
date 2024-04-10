import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Challenges from 'pages/challenges/Challenges';

const ChallengeLayout = () => {
    useSettingsMountEffect({
        disableNavigationType: true,
        disableHorizontalNavbarAppearance: true,
        disableVerticalNavbarAppearance: true,
        disableHorizontalNavbarShape: true,
        disableResetButton: true
    });

    useConfigMountEffect({
        theme: 'dark'
    });

    return <Challenges />;
};

export default ChallengeLayout;
