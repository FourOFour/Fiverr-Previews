import "App.css";
import Pricing from "components/pricing/pricing";
import Sidebar from "components/sidebar/sidebar";
import SignInUp from "components/sign-in-up/sign-in-up";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    function toggleIsDark() {
        setIsDark(!isDark);
    }

    return (
        <div className={"w-full h-full" + (isDark ? " dark" : "")}>
            <aside className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 dark:bg-gray-900 border-r-2 border-gray-300 dark:border-gray-600 shadow-r dark:shadow-gray-600 shadow-inner shadow-lg">
                <Sidebar isDark={isDark} toggleIsDark={toggleIsDark} />
            </aside>
            <main className="relative md:ml-64">
                <SignInUp />
                <Pricing />
            </main>
        </div>
    );
}

export default App;
