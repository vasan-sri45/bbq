
// "use client";

// import { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";

// export default function LoginForm() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       setError("All fields are required");
//       return;
//     }

//     setError("");
//     console.log("Login Data:", form);
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4">

//       {/* 🔥 BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg')",
//         }}
//       />

//       {/* 🔥 DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* 🔥 LOGIN CARD */}
//       <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">

//         <h2 className="text-2xl font-bold text-center mb-6 text-black">
//           Login
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm mb-4">{error}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">

//           {/* EMAIL */}
//           <div>
//             <label className="text-sm text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
//             />
//           </div>

//           {/* PASSWORD */}
//           <div className="relative">
//             <label className="text-sm text-gray-700">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-9 text-gray-500"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>

//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
//           >
//             Login
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useEmployeeLogin } from "../../hooks/useAuthMutations"; 

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // ✅ HOOK
  const { mutate, isPending, error: apiError } = useEmployeeLogin();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    setError("");

    // 🔥 CALL API
    mutate({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">

      {/* 🔥 BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 CARD */}
      <div className="relative z-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Login
        </h2>

        {/* ❌ VALIDATION ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* ❌ API ERROR */}
        {apiError && (
          <p className="text-red-500 text-sm mb-3">
            {apiError?.response?.data?.message || "Login failed"}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
}