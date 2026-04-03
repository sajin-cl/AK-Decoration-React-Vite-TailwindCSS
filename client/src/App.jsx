import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { NAV_LINKS } from "./config/data";


function App() {

  return (
    <section className="min-h-screen pt-16">
      <nav className="text-white px-2 py-0 fixed left-0 right-0 top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <Navbar navLinks={NAV_LINKS} />
      </nav>
      <Outlet />
    </section>
  )
};

export default App;