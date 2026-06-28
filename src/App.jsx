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

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="fixed top-0 z-50 w-full">
        <Header />
      </div>

      <main className="flex-1 pt-20">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center px-4">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold">
              React Starter Framework
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Building a production-ready React starter template with
              reusable components, layouts, authentication, dashboard,
              animations, and responsive design.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}