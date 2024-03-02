import { SignIn1PropsInputId } from "./sign-in-1.interface";
import { SignUp1PropsInputId } from "./sign-up-1.interface";

export interface SignInUp1Props {
    inputId?: {
        signIn?: SignIn1PropsInputId
        signUn?: SignUp1PropsInputId
    }
}