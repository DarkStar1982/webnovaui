import useConfigMountEffect from 'hooks/useConfigMountEffect';
import useSettingsMountEffect from 'hooks/useSettingsMountEffect';
import Challenges from 'pages/challenges/Challenges';
import LoginForm from 'components/modules/auth/LoginForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const LoginLayout = () => {
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

    return (
        <AuthSimpleLayout>
            <LoginForm layout="simple" />
        </AuthSimpleLayout>
    );
};

export default LoginLayout;
