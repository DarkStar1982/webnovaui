import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Mission from 'pages/mission/Mission';

const MissionLayout = () => {
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

    return <Mission />;
};

export default MissionLayout;
