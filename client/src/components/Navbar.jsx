import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiLotusFlower } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import { PERSONAL_NUMBER } from "@/config/data";

function Navbar({ navLinks }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="logo" className="w-16" />
          <span className="inline-block font-mono">
            AK <span className="text-amber-300">DECORATION</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.id}
              className="relative"
              onMouseEnter={() => setOpenDropdown(link.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {/* MAIN LINK */}
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-sm transition ${isActive ? "text-amber-300" : "text-white hover:text-amber-300"
                  }`
                }
              >
                {link.name}
                {link.children && <span>▾</span>}
              </NavLink>

              {/* DROPDOWN */}
              {link.children && (
                <div
                  className={`absolute left-0 top-10 mt-1 w-48 bg-white text-black transition-all duration-200 ${openDropdown === link.id
                      ? "opacity-100 translate-y-0 visible"
                      : "opacity-0 -translate-y-2 invisible"
                    }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.id}
                      to={child.href}
                      className="block px-5 py-2 hover:bg-amber-100 text-sm"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* WHATSAPP BUTTON */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${PERSONAL_NUMBER}?text=Hi%20I%20need%20decoration%20service`,
                "_blank"
              )
            }
            className="text-black font-mono font-bold text-sm bg-amber-300 py-1 px-5 rounded-full cursor-pointer hover:bg-amber-400"
          >
            Whatsapp
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="cursor-pointer"
          >
            {mobileOpen ? (
              <GiLotusFlower size={28} className="text-amber-300" />
            ) : (
              <RiMenu3Fill size={28} className="text-amber-300" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] mt-4" : "max-h-0"
          }`}
      >
        {navLinks.map((link) => (
          <div key={link.id} className="py-2">

            {/* MAIN */}
            {link.children ? (
              <button
                className="w-full flex justify-between items-center py-2 text-sm"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === link.id ? null : link.id
                  )
                }
              >
                <span className="hover:text-amber-300">{link.name}</span>
                <span>▾</span>
              </button>
            ) : (
              <Link
                to={link.href}
                className="block py-2 text-sm hover:text-amber-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            )}

            {/* DROPDOWN */}
            {link.children && (
              <div
                className={`overflow-hidden transition-all duration-300 ${openDropdown === link.id ? "max-h-40" : "max-h-0"
                  }`}
              >
                {link.children.map((child) => (
                  <Link
                    key={child.id}
                    to={child.href}
                    className="block pl-4 py-2 text-gray-300 hover:text-white text-sm"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenDropdown(null);
                    }}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* MOBILE WHATSAPP */}
        <button
          onClick={() =>
            window.open(
              `https://wa.me/${PERSONAL_NUMBER}?text=Hi%20I%20need%20decoration%20service`,
              "_blank"
            )
          }
          className="w-full mt-3 text-black font-mono font-bold text-sm bg-amber-300 py-2 rounded-full hover:bg-amber-400"
        >
          Whatsapp
        </button>
      </div>
    </>
  );
}

export default Navbar;