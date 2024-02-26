import PackageIcon from "../../../assets/svg/icons/package.svg?react";
import KarabonLogo from "../../../assets/svg/logo/karabon.svg?react";
import ArrowDownIcon from "../../../assets/svg/icons/arrow-down.svg?react";

function Navbar1() {
    return (
        <>
            <nav className="flex flex-row items-center md:h-14 px-4 border-b-[1px] gap-4 md:gap-6 text-black dark:text-white bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600">
                <div className="flex items-center space-x-2 lg:space-x-4">
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
                <div className="ml-auto flex items-center space-x-4">
                    <a className="text-sm font-medium hover:underline" href="#">
                        Documentation
                    </a>
                    <div className="relative">
                        <a
                            className="text-sm font-medium hover:underline"
                            href="#"
                        >
                            Pricing
                        </a>
                        <div className="absolute w-48 top-0 right-0 hidden">
                            <div>Basic</div>
                            <div>Pro</div>
                            <div>Enterprise</div>
                        </div>
                    </div>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Contact Sales
                    </a>
                    <div className="relative">
                        <a
                            className="inline-flex h-8 w-8 rounded-full border border-gray-200 items-center justify-center overflow-hidden hover:ring ring-gray-900/40 dark:ring-gray-50/40 hover:ring-[1px]"
                            href="#"
                        >
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
                        </a>
                        <div className="absolute w-48 hidden">
                            <div>Basic</div>
                            <div>Pro</div>
                            <div>Enterprise</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar1;
