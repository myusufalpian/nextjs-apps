import Button from "../elements/button";
import InputForm from "../elements/input";

const FormSignIn = () => {
    return(
        <form action="">
          <div className="mb-6">
            <InputForm htmlfor={'username'} type={'text'} placeholder={'example@email.com'} name={'username'} id={'username'}>Username</InputForm>
            <InputForm htmlfor={'password'} type={'password'} placeholder={'************'} name={'password'} id={'password'}>Password</InputForm>
          </div>
          <Button variant='bg-blue-700' text='text-white' classname = 'w-full'>Sign In</Button>
        </form>
    )
}

export default FormSignIn;
