import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
