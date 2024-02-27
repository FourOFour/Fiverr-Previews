import { useState } from 'react';
import './App1.css'
import Hero1 from './components/layouts/hero/hero-1';
import Navbar1 from './components/layouts/navbar/navbar-1';
import Pricing1 from './components/layouts/pricing/pricing-1';
import SignInUp1 from './components/layouts/sign-in-up/sign-in-up-1';
import Sidebar1 from './components/layouts/sidebar/sidebar-1';

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleIsDark() {
      setIsDark(!isDark);
  }

  return (
    <>
      <div className={"w-full h-full" + (isDark ? " dark" : "")}>
          <Sidebar1 isDark={isDark} toggleIsDark={toggleIsDark} />
          <main className="relative md:ml-48">
              <Navbar1 />
              <SignInUp1 />
              <Pricing1 />
              <Hero1 />
          </main>
      </div>
    </>
  )
}

export default App
