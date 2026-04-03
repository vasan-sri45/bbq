"use client";

import { useState } from "react";
import { Menu, X, Flame, User } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useAuthMutations";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const logout = useLogout("/login");

    const handleLogout = () => {
      setOpen(false);
    // setMenuOpen(false);
    // setProfileOpen(false);
    logout.mutate();
  };

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flame className="text-orange-500" />
            <span className="font-bold text-lg">BBQ Grill House</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">

            <button className="hover:text-orange-400 flex bg-red-400 p-2 rounded-xl justify-center items-center" onClick={handleLogout}>
              <User />
              Logout
            </button>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔥 SIDEBAR (OFF-CANVAS) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-4">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          {/* <Link href="/menus" onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link href="/restaurant_info" onClick={() => setOpen(false)}>
            Restaurant Info
          </Link> */}
        </div>
      </div>
    </>
  );
}