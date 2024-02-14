import TwitterIcon from "../../assets/svg/icons/twitter.svg?react";
import InstagramIcon from "../../assets/svg/icons/instagram.svg?react";
import FacebookIcon from "../../assets/svg/icons/facebook.svg?react";

function Hero() {
    return (
        <>
            <section className="relative w-full min-h-[400px] grid items:center dark:text-white text-black">
                <img
                    alt="Hero"
                    className="absolute inset-0 object-cover w-full h-full bg-cover z-[1] dark:block hidden"
                    src={import.meta.env.BASE_URL + "images/hero1.jpg"}
                />
                <img
                    alt="Hero"
                    className="absolute inset-0 object-cover w-full h-full bg-cover z-[1] dark:hidden"
                    src={import.meta.env.BASE_URL + "images/hero1_light.jpg"}
                />
                <div className="container px-4 text-center md:px-6 lg:text-left relative z-10 h-screen md:max-w-[50%]">
                    <div className="mb-[5vh]">
                        <p className="text-xs font-medium tracking-wider uppercase mt-[5vh] mb-[13vh]">
                            Always up to date
                        </p>
                        <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl/none mb-[4vh]">
                            The future of frontend development
                        </h1>
                        <p className="text-sm">
                            Sign up to get updates on the latest news and
                            features. No spam. Sign up to get updates on the
                            latest news and features. No spam.
                        </p>
                    </div>
                    <div className="mb-[1vh]">
                        <input
                            type="text"
                            className="h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full block rounded-full"
                            placeholder="Your first and last name"
                        />
                    </div>
                    <div className="flex flex-row gap-1 w-full mb-[4vh]">
                        <input
                            type="email"
                            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-l-full sm:w-auto flex-auto"
                            placeholder="Enter your email"
                        />
                        <button className="inline-flex items-center justify-center flex-none w-32 whitespace-nowrap rounded-md font-medium transition-colors rounded-r-full md:translate-x-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-800 hover:bg-blue-700 rounded-md text-white text-sm focus:outline-none uppercase">
                            Yes, I&apos;m in
                        </button>
                    </div>
                    <div className="">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full m-1 bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 p-2 border-blue-800 dark:border-blue-300">
                            <TwitterIcon />
                            <span className="sr-only">Twitter</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full m-1 bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 p-2 border-blue-800 dark:border-blue-300">
                            <InstagramIcon />
                            <span className="sr-only">Instagram</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full m-1 bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 p-2 border-blue-800 dark:border-blue-300">
                            <FacebookIcon />
                            <span className="sr-only">Facebook</span>
                        </button>
                    </div>
                    <div className="md:absolute bottom-[2vh] left-[5vh]">
                        <p className="text-xs font-medium tracking-wider uppercase">
                            &copy;2024 KarabonTM, All Rights Reserved.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
