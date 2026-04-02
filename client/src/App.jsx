import { href, Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";



/* NavLinks */
const NAV_LINKS = [
  { id: 1, name: "Home", href: "/" },
  {
    id: 2,
    name: "Services",
    href: '/wedding-decoration',
    children: [
      { id: 21, name: "Wedding Decoration", href: "/wedding-decoration" },
      { id: 22, name: "Floral Decoration", href: "/floral-decoration" },
      { id: 23, name: "Stage Decoration", href: "/stage-decoration" },
    ],
  },
  { id: 3, name: "Gallery", href: "/gallery" },
  { id: 4, name: "About", href: "/about" },
  { id: 5, name: "Contact", href: "/contact" },
];


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