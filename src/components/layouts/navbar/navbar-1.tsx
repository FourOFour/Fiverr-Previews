import PackageIcon from "../../../assets/svg/icons/package.svg";
import KarabonLogo from "../../../assets/svg/logo/karabon.svg";
import ArrowDownIcon from "../../../assets/svg/icons/arrow-down.svg";
import Toggle, { ToggleBody, ToggleButton } from "../../toggle/toggle";

function Navbar1() {
    return (
        <>
            <nav className="sm:flex sm:flex-row sm:items-center md:h-14 px-4 border-b-[1px] gap-4 md:gap-6 text-black dark:text-white bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                <div className="sm:flex sm:items-center sm:space-x-2 lg:space-x-4">
                    <a
                        className="flex items-center space-x-2 text-lg font-bold"
                        href="#"
                    >
                        <PackageIcon className="h-6 w-6" />
                        <KarabonLogo
                            className="block"
                            width={64}
                            height={32}
                            style={{
                                aspectRatio: "64 / 32",
                                objectFit: "cover",
                            }}
                        />
                    </a>
                </div>
                <div className="ml-auto sm:flex sm:items-center sm:space-x-4">
                    <a className="text-sm font-medium hover:underline" href="#">
                        Documentation
                    </a>
                    <div className="relative">
                        <Toggle fade={true} fadeTimer={2500}>
                            <ToggleButton className="text-sm font-medium hover:underline">
                                Pricing
                                <ArrowDownIcon
                                    className="inline-block ml-1"
                                    height={10}
                                    width={10}
                                />
                            </ToggleButton>
                            <ToggleBody>
                                <div className="sm:absolute sm:w-48 sm:top-[100%] sm:right-0 text-black dark:text-white sm:bg-white sm:dark:bg-gray-900 sm:border-gray-300 sm:dark:border-gray-600 sm:border-[1px] px-3 py-2 sm:rounded">
                                    <a
                                        className="text-sm font-medium hover:underline block"
                                        href="#"
                                    >
                                        Basic
                                    </a>
                                    <a
                                        className="text-sm font-medium hover:underline block"
                                        href="#"
                                    >
                                        Pro
                                    </a>
                                    <a
                                        className="text-sm font-medium hover:underline block"
                                        href="#"
                                    >
                                        Enterprise
                                    </a>
                                </div>
                            </ToggleBody>
                        </Toggle>
                    </div>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Contact Sales
                    </a>
                    <div className="relative">
                        <Toggle fade={true} fadeTimer={2500}>
                            <ToggleButton className="inline-flex h-8 w-8 rounded-full border border-gray-200 items-center justify-center overflow-hidden ring-gray-900/40 dark:ring-gray-50/40 hover:ring-[1px]">
                                <ArrowDownIcon
                                    className="rounded-full"
                                    height={16}
                                    width={16}
                                    style={{
                                        aspectRatio: "16/16",
                                        objectFit: "cover",
                                    }}
                                />
                                {/* <img
                                alt="Avatar"
                                className="rounded-full"
                                height={32}
                                width={32}
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                            /> */}
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </ToggleButton>
                            <ToggleBody>
                                <div className="sm:absolute sm:w-48 sm:top-[100%] sm:right-0 text-black dark:text-white sm:bg-white sm:dark:bg-gray-900 sm:border-gray-300 sm:dark:border-gray-600 sm:border-[1px] px-3 py-2 sm:rounded">
                                    <a
                                        className="text-sm font-medium hover:underline block"
                                        href="#"
                                    >
                                        Basic
                                    </a>
                                    <a
                                        className="text-sm font-medium hover:underline block"
                                        href="#"
                                    >
                                        Pro
                                    </a>
                                    <a
                                        className="text-sm font-medium hover:underline block"
                                        href="#"
                                    >
                                        Enterprise
                                    </a>
                                </div>
                            </ToggleBody>
                        </Toggle>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar1;
