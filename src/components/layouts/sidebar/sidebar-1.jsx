import PropTypes from "prop-types";
import SunIcon from "../../../assets/svg/icons/sun.svg?react";
import MoonIcon from "../../../assets/svg/icons/moon.svg?react";
import HomeIcon from "../../../assets/svg/icons/home.svg?react";
import ProfileIcon from "../../../assets/svg/icons/profile.svg?react";
import SettingIcon from "../../../assets/svg/icons/setting.svg?react";

function Sidebar1(props) {
    return (
        <>
            <aside className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:overflow-hidden md:shadow-xl relative md:w-48 z-10 bg-white dark:bg-gray-900 md:border-r-[1px] md:border-gray-300 dark:border-gray-600">
                <div className="flex flex-col dark:text-white">
                    <header className="p-4 flex justify-between relative">
                        <h1 className="text-xl font-bold">My App</h1>
                        <button
                            type="button"
                            aria-pressed="false"
                            data-state="off"
                            className="items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent h-10 px-3 absolute right-2 top-2"
                            aria-label="Toggle theme"
                            onClick={props.toggleIsDark}
                        >
                            <SunIcon
                                className={
                                    "h-4 w-4 " + (props.isDark ? "" : "hidden")
                                }
                            />
                            <MoonIcon
                                className={
                                    "h-4 w-4 " + (props.isDark ? "hidden" : "")
                                }
                            />
                        </button>
                    </header>
                    <nav className="mt-4">
                        <ul>
                            <li className="mb-2">
                                <a
                                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
                                    href="#"
                                >
                                    <HomeIcon className="h-6 w-6" />
                                    <span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
                                    href="#"
                                >
                                    <ProfileIcon className="h-6 w-6" />
                                    <span className="ml-2">Profile</span>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a
                                    className="flex items-center py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
                                    href="#"
                                >
                                    <SettingIcon className="h-6 w-6" />
                                    <span className="ml-2">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}

Sidebar1.propTypes = {
    toggleIsDark: PropTypes.func,
    isDark: PropTypes.bool,
};

export default Sidebar1;
