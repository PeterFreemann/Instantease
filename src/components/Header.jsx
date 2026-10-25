import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "../config/site";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ie-orange";

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (to) => !to.includes("#") && pathname === to;

  return (
    <header className="sticky top-0 z-[200] border-b border-white/10 bg-ie-dark/95 font-figtree text-white shadow-[0_2px_24px_rgba(0,26,17,0.25)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] min-[769px]:h-18 items-center justify-between px-4 sm:px-6 lg:px-12">
        <Link to="/" onClick={closeMenu} className={`flex items-center rounded-md ${focusRing}`}>
          <img src="/images/app/logo-white.png" alt="InstantEase home" width="442" height="72" className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isActive(item.to) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:bg-white/10 hover:text-white ${
                isActive(item.to) ? "bg-white/10 text-white" : "text-white/80"
              } ${focusRing}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#download"
            className={`ml-3 rounded-full bg-ie-orange px-5 py-2.5 text-[15px] font-bold text-ie-green-900 transition-colors hover:bg-[#ff8a33] ${focusRing}`}
          >
            Get the app
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`flex size-11 cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden ${focusRing}`}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-white/10 bg-ie-dark px-4 pb-6 pt-2 sm:px-6 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              aria-current={isActive(item.to) ? "page" : undefined}
              className={`border-b border-white/10 px-2 py-4 text-lg font-medium text-white/90 hover:text-white ${focusRing}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/#download"
            onClick={closeMenu}
            className={`mt-5 rounded-full bg-ie-orange px-5 py-3.5 text-center text-base font-bold text-ie-green-900 ${focusRing}`}
          >
            Get the app
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
