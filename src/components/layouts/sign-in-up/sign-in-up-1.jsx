import { useState } from "react";
import KarabonLogo from "../../../assets/svg/logo/karabon.svg?react";
import CheckIcon from "../../../assets/svg/icons/check.svg?react";

function SignInUp1() {
    const [checked, setChecked] = useState(false);
    function toggleChecked() {
        setChecked(!checked);
    }

    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-2xl dark:text-white text-black">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md sm:rounded-lg px-8 pt-6 pb-8 mb-4 border-solid border-[1px] border-gray-200 dark:border-gray-700">
                    <div className="mb-4 flex items-center justify-center">
                        <KarabonLogo
                            className="mr-2 block"
                            width={64}
                            height={32}
                            style={{
                                aspectRatio: "64 / 32",
                                objectFit: "cover",
                            }}
                        />

                        <h1 className="text-2xl font-bold text-center">
                            Login
                        </h1>
                    </div>
                    <form className="space-y-4">
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="username"
                                placeholder="Username"
                                type="text"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="password"
                                placeholder="*********"
                                type="password"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="sm:flex items-center justify-between">
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    role="checkbox"
                                    aria-checked={checked}
                                    data-state={
                                        checked ? "checked" : "unchecked"
                                    }
                                    value="on"
                                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                    onClick={toggleChecked}
                                >
                                    <span
                                        data-state={
                                            checked ? "checked" : "unchecked"
                                        }
                                        className="flex items-center justify-center text-current data-[state=checked]:block hidden"
                                        style={{
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <CheckIcon
                                            className="h-4 w-4"
                                            />
                                    </span>
                                </button>
                                <input
                                    aria-hidden="true"
                                    tabIndex="-1"
                                    id="remember"
                                    type="checkbox"
                                    value="on"
                                    checked={checked}
                                    onChange={toggleChecked}
                                    style={{
                                        transform: "translateX(-100%)",
                                        position: "absolute",
                                        pointerEvents: "none",
                                        opacity: "0",
                                        margin: "0px",
                                    }}
                                />
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
                                    htmlFor="remember"
                                >
                                    Remember Me
                                </label>
                            </div>
                            <a
                                className="text-sm text-gray-700 underline dark:text-gray-200 sm:inline-block block sm:mt-0 mt-4"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        </div>
                        <div className="mt-6">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="captcha"
                            >
                                Captcha
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="captcha"
                                placeholder="Enter Captcha"
                                type="text"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-gray-800 rounded-md text-white text-sm hover:bg-gray-700 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 focus:outline-none"
                                type="button"
                            >
                                Login with Google
                            </button>
                        </div>
                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-700 focus:outline-none"
                                type="button"
                            >
                                Login with Facebook
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md sm:rounded-lg px-8 pt-6 pb-8 mb-4 mt-8 border-solid border-[1px] border-gray-200 dark:border-gray-700">
                    <div className="mb-4 flex items-center justify-center">
                        <KarabonLogo
                            className="mr-2 block"
                            width={64}
                            height={32}
                            style={{
                                aspectRatio: "64 / 32",
                                objectFit: "cover",
                            }}
                        />
                        <h1 className="text-2xl font-bold text-center">
                            Sign Up
                        </h1>
                    </div>
                    <form className="space-y-4">
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="signup-username"
                            >
                                Username
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="signup-username"
                                placeholder="Username"
                                type="text"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="signup-email"
                            >
                                Email
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="signup-email"
                                placeholder="Email"
                                type="email"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="signup-password"
                            >
                                Password
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="signup-password"
                                placeholder="*********"
                                type="password"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mb-4">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="signup-confirm-password"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="signup-confirm-password"
                                placeholder="*********"
                                type="password"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mt-6">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="signup-captcha"
                            >
                                Captcha
                            </label>
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none dark:text-white dark:bg-gray-600 dark:ring-gray-600"
                                id="signup-captcha"
                                placeholder="Enter Captcha"
                                type="text"
                            />
                            <p className="text-xs font-medium leading-none text-red-500 mt-1">Error message goes here</p>
                        </div>
                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-gray-800 rounded-md text-white text-sm hover:bg-gray-700 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 focus:outline-none"
                                type="button"
                            >
                                Sign Up with Google
                            </button>
                        </div>
                        <div className="mt-6">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-700 focus:outline-none"
                                type="button"
                            >
                                Sign Up with Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInUp1;
