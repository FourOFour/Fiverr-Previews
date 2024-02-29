import SignUp1 from "../sign-in-up/sign-up-1";

function Hero2() {
    return (
        <>
            <section className="relative w-full min-h-screen sm:grid items:center dark:text-white text-black px-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 pb-10">
                <div className="container">
                    <div className="grid gap-4 lg:grid-flow-row lg:grid-cols-5 grid-cols-1">
                        <div className="lg:col-span-3 col-span-1">
                            col-span-2
                        </div>
                        <div className="lg:col-span-2 col-span-1">
                            <SignUp1 inputId={{
                                username: 'signup-username-2',
                                email: 'signup-email-2',
                                password: 'signup-password-2',
                                confirmPassword: 'signup-confirm-password-2',
                                captcha: 'signup-captcha-2',
                            }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero2;