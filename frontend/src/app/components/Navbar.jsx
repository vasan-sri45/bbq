// "use client";
// import { Flame } from "lucide-react";
// import Link from "next/link";

// export default function Navigation() {


//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
          
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <Flame className="w-8 h-8 text-orange-500" />
//             <span className="text-2xl font-bold">BBQ Grill House</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <Link href="/menus"
//               className="hover:text-orange-400 transition-colors"
//             >
//               Browse Menu
//             </Link>

//             <Link
//               href="/restaurant_info"
//               className="hover:text-orange-400 transition-colors"
//             >
//               Restaurant info
//             </Link>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";

import { useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* 🔥 Logo */}
            <Link className="flex items-center space-x-3" href="/">
              <Flame className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold">BBQ Grill House</span>
            </Link>

            {/* 💻 Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link href="/menus" className="hover:text-orange-400">
                Browse Menu
              </Link>

              <Link href="/restaurant_info" className="hover:text-orange-400">
                Restaurant info
              </Link>
            </div>

            {/* 📱 Mobile Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </nav>

      {/* 🌑 OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* 📱 OFF-CANVAS MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >

        {/* ❌ Close */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* 📋 Links */}
        <div className="flex flex-col p-4 space-y-4">
          <Link href="/menus" onClick={() => setOpen(false)}>
            Browse Menu
          </Link>

          <Link href="/restaurant_info" onClick={() => setOpen(false)}>
            Restaurant info
          </Link>
        </div>
      </div>
    </>
  );
}