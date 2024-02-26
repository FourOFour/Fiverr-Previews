import "./app.css";
import Hero1 from "./components/hero/hero-1";
import Navbar1 from "./components/navbar/navbar-1";
import Pricing1 from "./components/pricing/pricing-1";
import Sidebar1 from "./components/sidebar/sidebar-1";
import SignInUp1 from "./components/sign-in-up/sign-in-up-1";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    function toggleIsDark() {
        setIsDark(!isDark);
    }

    return (
        <div className={"w-full h-full" + (isDark ? " dark" : "")}>
            <Sidebar1 isDark={isDark} toggleIsDark={toggleIsDark} />
            <main className="relative md:ml-48">
                <Navbar1 />
                <SignInUp1 />
                <Pricing1 />
                <Hero1 />
            </main>
        </div>
    );
}

export default App;
