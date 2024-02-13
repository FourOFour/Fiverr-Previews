import "./app-1.css";
import Hero from "./components/hero/hero";
import Pricing from "./components/pricing-1/pricing-1";
import Sidebar from "./components/sidebar-1/sidebar-1";
import SignInUp from "./components/sign-in-up-1/sign-in-up-1";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    function toggleIsDark() {
        setIsDark(!isDark);
    }

    return (
        <div className={"w-full h-full" + (isDark ? " dark" : "")}>
            <aside className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:overflow-hidden shadow-xl bg-white relative md:w-48 z-10 dark:bg-gray-900 border-r-2 border-gray-300 dark:border-gray-600 shadow-r dark:shadow-gray-600 shadow-inner shadow-lg">
                <Sidebar isDark={isDark} toggleIsDark={toggleIsDark} />
            </aside>
            <main className="relative md:ml-48">
                <SignInUp />
                <Pricing />
                <Hero />
            </main>
        </div>
    );
}

export default App;
