import FormSignUp from "../components/fragments/FormSignUp";
import AuthLayout from "../components/layouts/AuthLayout";

const SignUp = () => {
    return(
        <AuthLayout authTitle="Sign Up" type= "signup"> 
            <FormSignUp />
        </AuthLayout>
    );
}

export default SignUp;
