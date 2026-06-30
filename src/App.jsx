import Header from "@/components/navigation/Header";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import About from "@/components/sections/about";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Features />
        <About />
      </main>

    </>
  );
}