"use client";

import { useEffect, useState } from "react";
import { Logo, LogoSmall } from "@/lib/icons";
import { nav } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed px-4 lg:px-12 py-6 bg-white/70 w-full z-50 top-0 backdrop-blur-lg flex flex-col lg:flex-row justify-between gap-y-8">
      <div>
        <Link href="/" className="hover:opacity-60 transition-all">
          {scrolled ? (
            <LogoSmall />
          ) : (
            <img
              src="/assets/logo.svg"
              alt="Juan Gaig Relaciones Inmobiliarias"
            />
          )}
          {/* {scrolled ? <LogoSmall /> : <Logo />} */}
        </Link>
      </div>
      <nav className={`lg:block ${open ? "block" : "hidden"}`}>
        <ul className="flex flex-col lg:flex-row gap-y-3 gap-x-10 text-[0.95rem]">
          {nav.map((item, index) =>
            item.href === "/contacto" ? (
              <li key={index} className="mt-6 lg:mt-0">
                <Link
                  href={item.href}
                  className={`uppercase font-semibold bg-black border-black border rounded-2xl px-4 py-2 ${
                    pathname === item.href
                      ? "text-white bg-black"
                      : "hover:text-white hover:bg-black bg-transparent text-black"
                  }`}
                  onClick={() => setOpen(!open)}
                >
                  {item.name}
                </Link>
              </li>
            ) : (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`uppercase border font-semibold rounded-2xl lg:px-4 py-2 ${
                    pathname === item.href
                      ? "border-transparent underline lg:no-underline lg:border-black"
                      : "hover:text-white hover:bg-black border-transparent"
                  }`}
                  onClick={() => setOpen(!open)}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="lg:hidden absolute right-4">
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={` h-6 w-6`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
