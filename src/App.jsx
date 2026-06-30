// import ThemeToggle from "@/components/ui/ThemeToggle";

// function App() {
//   return (
//     <main
//       className="flex min-h-screen items-center justify-center"
//       style={{
//         background: "var(--color-background)",
//         color: "var(--color-text)",
//       }}
//     >
//       <div
//         className="w-full max-w-xl rounded-2xl p-10 shadow-xl"
//         style={{
//           background: "var(--color-surface)",
//           border: "1px solid var(--color-border)",
//         }}
//       >
//         <div className="mb-8 flex items-center justify-between">
//           <h1 className="text-4xl font-bold">
//             React Ultimate Starter
//           </h1>

//           <ThemeToggle />
//         </div>

//         <p
//           style={{
//             color: "var(--color-textSecondary)",
//           }}
//         >
//           Theme Engine Ready
//         </p>

//         <div className="mt-8 space-y-3">
//           <p>✅ React</p>
//           <p>✅ Tailwind CSS</p>
//           <p>✅ Theme Provider</p>
//           <p>✅ Light / Dark Mode</p>
//           <p>🚀 Framework Started</p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;

import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/hero";

export default function App() {
  return (
    <>
      <Header />

      <Hero />
    </>
  );
}