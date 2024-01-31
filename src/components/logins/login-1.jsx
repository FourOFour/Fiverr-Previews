export default function Login1() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center pt-20 pb-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-2xl">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 flex items-center justify-center">
            <img
            src="/placeholder.svg"
            alt="Logo"
            className="mr-2"
            width="32"
            height="32"
            style={{'aspect-ratio': '32 / 32', 'object-fit': 'cover'}}
            />
            <h1 className="text-2xl font-bold text-center">Login</h1>
        </div>
        <form className="space-y-4">
            <div className="mb-4">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                // for="username"
            >
                Username
            </label>
            <input
                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                id="username"
                placeholder="Username"
                type="text"
            />
            </div>
            <div className="mb-4">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                // for="password"
            >
                Password
            </label>
            <input
                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                id="password"
                placeholder="*********"
                type="password"
            />
            </div>
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <button
                type="button"
                role="checkbox"
                aria-checked="false"
                data-state="unchecked"
                value="on"
                className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                id="remember"
                ></button>
                <input
                aria-hidden="true"
                // tabindex="-1"
                type="checkbox"
                value="on"
                style={{'transform' : 'translateX(-100%)', 'position' : 'absolute', 'pointer-events' : 'none', 'opacity' : '0', 'margin': '0px'}}
                />
                <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
                // for="remember"
                >
                Remember Me
                </label>
            </div>
            <a className="text-sm text-gray-700 underline dark:text-gray-200" href="#">
                Forgot Password?
            </a>
            </div>
            <div className="mt-6">
            <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                // for="captcha"
            >
                Captcha
            </label>
            <input
                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                id="captcha"
                placeholder="Enter Captcha"
                type="text"
            />
            </div>
            <div className="mt-6">
            <button
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-gray-800 rounded-md text-white text-sm hover:bg-gray-700 focus:outline-none"
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
    </div>
  )
}