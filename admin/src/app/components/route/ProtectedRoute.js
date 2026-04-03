
"use client";

import { useAuthGuard } from "./useAuthGuard";

export default function ProtectedRoute({ children }) {
  const { loading, user } = useAuthGuard();

  // While checking session → prevent flicker
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <p className="text-gray-500 text-lg animate-pulse">
          Checking authentication...
        </p>
      </div>
    );
  }

  // Not logged in → guard already redirected
  if (!user) return null;

  return <>{children}</>;
}