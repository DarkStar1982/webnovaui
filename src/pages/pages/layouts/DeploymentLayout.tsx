import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Deployments from 'pages/deployments/Deployments';

const DeploymentLayout = () => {
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

    return <Deployments />;
};

export default DeploymentLayout;
