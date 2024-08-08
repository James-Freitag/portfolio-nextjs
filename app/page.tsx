import About from "./components/About";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <Header />
      <About />
    </main>
  );
}
