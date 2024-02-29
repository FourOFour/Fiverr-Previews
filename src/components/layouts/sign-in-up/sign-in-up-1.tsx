import SignIn1 from "./sign-in-1";
import { SignInUp1Props } from "./sign-in-up-1.interface";
import SignUp1 from "./sign-up-1";

function SignInUp1(props:SignInUp1Props) {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-2xl dark:text-white text-black">
                <SignIn1 inputId={props?.inputId?.signIn} />
                <SignUp1 inputId={props?.inputId?.signUn} />
            </div>
        </>
    );
}

export default SignInUp1;
