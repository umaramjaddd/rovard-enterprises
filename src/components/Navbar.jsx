"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Menu, X } from "lucide-react";
import { appName } from "@/constants/appName.";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Profile", href: "/about" },
    { name: "Contacts", href: "/contact" },
    { name: "Feed", href: "/faq" },
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 hidden md:flex items-center text-white bg-black border-b border-zinc-900
        ${scrolled ? "h-[75px] shadow-2xl bg-black/95 backdrop-blur-sm" : "h-[90px]"}`}
      >
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-6">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10">
              <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
            </div>
            <h1 className="font-sans font-black tracking-wider text-xl ml-3 uppercase text-white">
              {appName}
            </h1>
          </Link>

          {/* Navigation Links with Raw Maroon Hex values */}
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors duration-200
                  ${pathname === link.href ? "text-[#cf1d25] border-b-2 border-[#cf1d25] pb-1" : "text-zinc-300 hover:text-white"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* "Send Inquiry" Button styled using exact Brand Maroon Hex */}
          <div>
            <Link href="/contact">
              <button className="bg-[#cf1d25] hover:bg-[#9b1218] text-white text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded-sm transition-all shadow-md flex items-center gap-2 cursor-pointer border-0">
                <Icon icon="ri:mail-send-line" width="14" />
                Send Inquiry
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* --- MOBILE NAVBAR --- */}
      <header className="fixed top-0 left-0 w-full z-50 flex md:hidden items-center bg-black h-[70px] text-white px-4 border-b border-zinc-900">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <div className="relative w-9 h-9">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <h1 className="font-sans font-black tracking-wider text-base ml-2 uppercase">{appName}</h1>
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 cursor-pointer text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {menuOpen && (
          <div className="fixed inset-0 top-[70px] bg-black flex flex-col p-6 space-y-6 z-50 border-t border-zinc-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-base font-medium tracking-widest border-b border-zinc-900 pb-4 uppercase
                  ${pathname === link.href ? "text-[#cf1d25] font-bold" : "text-zinc-300"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="bg-[#cf1d25] hover:bg-[#9b1218] text-center text-white py-3 rounded-sm text-sm uppercase tracking-widest font-bold block"
            >
              Send Inquiry
            </Link>
            
            <div className="flex gap-6 pt-6 justify-center">
               <Icon icon="ri:facebook-fill" width="24" className="text-zinc-400 hover:text-[#cf1d25]" />
               <Icon icon="ri:instagram-line" width="24" className="text-zinc-400 hover:text-[#cf1d25]" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}