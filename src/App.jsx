import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Login1 from "./components/logins/login-1";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(false);

    function toggleDark() {
        setIsDark(!isDark);
    }

    return (
        <div className={"w-full" + (isDark ? " dark" : "")}>
            <Sidebar toggleDark={toggleDark} />
            <div className="relative md:ml-64">
                <Login1 />
            </div>
        </div>
    );
}

export default App;
