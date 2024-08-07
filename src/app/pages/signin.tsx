import FormSignIn from "../components/fragments/FormSignIn";
import AuthLayout from "../components/layouts/AuthLayout";

const SignIn = () => {
    return(
        <AuthLayout authTitle="Sign In" type= "signin"> 
            <FormSignIn />
        </AuthLayout>
    );
}

export default SignIn;
