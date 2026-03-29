import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

function App() {

  /* NavLinks */
  const NAV_LINKS = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Services",
      children: [
        { id: 21, name: "Wedding Decoration", href: "#" },
        { id: 22, name: "Floral Decoration", href: "#" },
        { id: 23, name: "Stage Decoration", href: "#" },
      ],
    },
    { id: 3, name: "Gallery", href: "#" },
    { id: 4, name: "About", href: "#" },
    { id: 5, name: "Contact", href: "#" },
  ];


  return (
    <section className="min-h-screen pt-20">
      <nav className="text-white px-2 py-0 fixed left-0 right-0 top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <Navbar navLinks={NAV_LINKS} />
      </nav>
      <Outlet />
    </section>
  )
};

export default App;