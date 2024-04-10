import RegisterForm from 'components/modules/auth/RegisterForm';
import AuthSimpleLayout from 'layouts/AuthSimpleLayout';

const Register = () => {
    return (
        <AuthSimpleLayout>
            <RegisterForm layout="simple" />
        </AuthSimpleLayout>
    );
};

export default Register;
