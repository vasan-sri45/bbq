"use client";

import Navbar from "../components/elemennts/Navbar";
import ProtectedRoute from "../components/route/ProtectedRoute";


export default function AdminLayout({ children }) {

  return (
    <ProtectedRoute >
      <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="pt-4 px-6">
        {children}
      </main>
    </div>
    </ProtectedRoute>
  );
}
