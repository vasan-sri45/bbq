// "use client";

// export default function SearchBar() {
//   return (
//     <div className="w-full flex gap-3">

//       <div className="flex-1 bg-gray-200 rounded-xl px-4 py-3">
//         <p className="text-xs text-gray-500 mb-1">
//           Search dish...
//         </p>

//         <input
//           type="text"
//           placeholder="ex. 1/2 Chicken with Rice"
//           className="w-full bg-transparent outline-none text-gray-700"
//         />
//       </div>

//     </div>
//   );
// }

"use client";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full flex gap-3">

      <div className="flex-1 bg-gray-200 rounded-xl px-4 py-3">
        <p className="text-xs text-gray-500 mb-1">
          Search dish...
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ex. 1/2 Chicken with Rice"
          className="w-full bg-transparent outline-none text-gray-700"
        />
      </div>

    </div>
  );
}