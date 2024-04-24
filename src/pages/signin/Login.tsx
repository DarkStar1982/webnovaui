import ExodusLoginForm from 'components/modules/auth/ExodusLoginForm';
import ExodusAuthSimpleLayout from 'layouts/ExodusAuthSimpleLayout';

const Login = () => {
    return (
        <ExodusAuthSimpleLayout>
            <ExodusLoginForm layout="simple" />
        </ExodusAuthSimpleLayout>
    );
};

export default Login;
