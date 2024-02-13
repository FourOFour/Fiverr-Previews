import PlusIcon from "../../assets/svg/icons/plus.svg?react";
import PriceTagIcon from "../../assets/svg/icons/price-tag.svg?react";
import CircleIcon from "../../assets/svg/icons/circle.svg?react";

function Pricing() {
    return (
        <>
            <section
                key="1"
                className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
            >
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 dark:text-white mx-auto">
                    <div className="space-y-3 bg-white dark:bg-gray-800 shadow-md sm:rounded-lg px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                            Choose the perfect plan for your team
                        </h2>
                        <p className="mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            All plans include unlimited projects and team
                            members. 14-day trial on all plans.
                        </p>
                    </div>
                    <div className="grid max-w-sm mx-auto items-center gap-4 lg:max-w-none lg:grid-cols-3 lg:gap-6">
                        <div className="flex flex-col items-center gap-1  md:gap-2 md:items-start lg:grid lg:place-items-center/only-child bg-white dark:bg-gray-800 shadow-md sm:rounded-lg px-8 pt-6 pb-8 mb-4 dark:text-white">
                            <div className="flex items-center gap-2 justify-center">
                                <span className="text-blue-200 dark:text-blue-100">
                                    <PriceTagIcon className="h-4 w-4" />
                                </span>
                                <h3 className="text-xl font-bold tracking-tight">
                                    Starter
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Starts at
                            </p>
                            <p
                                className="text-2xl font-extrabold"
                                id="rz2ilmg6br9"
                            >
                                $19/mo
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                billed at{" "}
                                <span className="line-through">$600</span>{" "}
                                $500/yr
                            </p>
                            <ul className="grid gap-2 text-sm sm:gap-4 md:text-base lg:gap-2">
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li
                                    className="flex items-center gap-2"
                                    id="zvek7l8ocxd"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li
                                    className="flex items-center gap-2"
                                    id="zvek7l8ocxd"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Basic analytics
                                </li>
                                <li>
                                    <ul className="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                                        <li
                                            role="button"
                                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-react-1"
                                                className="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div className="grid mr-3 place-items-center">
                                                    <div className="inline-flex items-center">
                                                        <label
                                                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-react-1"
                                                        >
                                                            <input
                                                                name="horizontal-list-1"
                                                                id="horizontal-list-react-1"
                                                                type="radio"
                                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <CircleIcon className="h-3.5 w-3.5" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Monthly
                                                </p>
                                            </label>
                                        </li>
                                        <li
                                            role="button"
                                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-vue-1"
                                                className="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div className="grid mr-3 place-items-center">
                                                    <div className="inline-flex items-center">
                                                        <label
                                                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-vue-1"
                                                        >
                                                            <input
                                                                name="horizontal-list-1"
                                                                id="horizontal-list-vue-1"
                                                                type="radio"
                                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <CircleIcon className="h-3.5 w-3.5" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Yearly
                                                </p>
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-gray-800 rounded-md text-white text-sm hover:bg-gray-700 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-1  md:gap-2 md:items-start lg:grid lg:place-items-center/only-child bg-white dark:bg-gray-800 shadow-md sm:rounded-lg px-8 pt-6 pb-8 mb-4 dark:text-white">
                            <div className="flex items-center gap-2 justify-center">
                                <span className="text-blue-600 dark:text-blue-300">
                                    <PriceTagIcon className="h-4 w-4" />
                                </span>
                                <h3 className="text-xl font-bold tracking-tight">
                                    Pro
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Starts at
                            </p>
                            <p
                                className="text-2xl font-extrabold"
                                id="rz2ilmg6br9"
                            >
                                $49/mo
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                billed at{" "}
                                <span className="line-through">$600</span>{" "}
                                $500/yr
                            </p>
                            <ul className="grid gap-2 text-sm sm:gap-4 md:text-base lg:gap-2">
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li
                                    className="flex items-center gap-2"
                                    id="zvek7l8ocxd"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li
                                    className="flex items-center gap-2"
                                    id="zvek7l8ocxd"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Basic analytics
                                </li>
                                <li>
                                    <ul className="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                                        <li
                                            role="button"
                                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-react-2"
                                                className="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div className="grid mr-3 place-items-center">
                                                    <div className="inline-flex items-center">
                                                        <label
                                                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-react-2"
                                                        >
                                                            <input
                                                                name="horizontal-list-2"
                                                                id="horizontal-list-react-2"
                                                                type="radio"
                                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <CircleIcon className="h-3.5 w-3.5" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Monthly
                                                </p>
                                            </label>
                                        </li>
                                        <li
                                            role="button"
                                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-vue-2"
                                                className="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div className="grid mr-3 place-items-center">
                                                    <div className="inline-flex items-center">
                                                        <label
                                                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-vue-2"
                                                        >
                                                            <input
                                                                name="horizontal-list-2"
                                                                id="horizontal-list-vue-2"
                                                                type="radio"
                                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <CircleIcon className="h-3.5 w-3.5" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Yearly
                                                </p>
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 focus:outline-none"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="flex flex-col items-center gap-1  md:gap-2 md:items-start lg:grid lg:place-items-center/only-child bg-white dark:bg-gray-800 shadow-md sm:rounded-lg px-8 pt-6 pb-8 mb-4 dark:text-white">
                            <div className="flex items-center gap-2 justify-center">
                                <span className="text-blue-700 dark:text-blue-400">
                                    <PriceTagIcon className="h-4 w-4" />
                                </span>
                                <h3 className="text-xl font-bold tracking-tight">
                                    Enterprise
                                </h3>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Starts at
                            </p>
                            <p
                                className="text-2xl font-extrabold"
                                id="rz2ilmg6br9"
                            >
                                $99/mo
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                billed at{" "}
                                <span className="line-through">$600</span>{" "}
                                $500/yr
                            </p>
                            <ul className="grid gap-2 text-sm sm:gap-4 md:text-base lg:gap-2">
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li
                                    className="flex items-center gap-2"
                                    id="zvek7l8ocxd"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li
                                    className="flex items-center gap-2"
                                    id="zvek7l8ocxd"
                                >
                                    <PlusIcon className="h-4 w-4" />
                                    Unlimited team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Basic analytics
                                </li>
                                <li>
                                    <ul className="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                                        <li
                                            role="button"
                                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-react-3"
                                                className="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div className="grid mr-3 place-items-center">
                                                    <div className="inline-flex items-center">
                                                        <label
                                                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-react-3"
                                                        >
                                                            <input
                                                                name="horizontal-list-3"
                                                                id="horizontal-list-react-3"
                                                                type="radio"
                                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <CircleIcon className="h-3.5 w-3.5" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Monthly
                                                </p>
                                            </label>
                                        </li>
                                        <li
                                            role="button"
                                            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-vue-3"
                                                className="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div className="grid mr-3 place-items-center">
                                                    <div className="inline-flex items-center">
                                                        <label
                                                            className="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-vue-3"
                                                        >
                                                            <input
                                                                name="horizontal-list-3"
                                                                id="horizontal-list-vue-3"
                                                                type="radio"
                                                                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <CircleIcon className="h-3.5 w-3.5" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Yearly
                                                </p>
                                            </label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center bg-blue-800 rounded-md text-white text-sm hover:bg-blue-700 focus:outline-none"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;
