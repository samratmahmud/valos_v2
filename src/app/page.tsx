import Image from "next/image";
import Header from "./Header";
import Navbar from "@/components/global/Navbar";
import Cards from "./Cards";

export default function Home() {
  return (
    <div className="bg-cyan-950">
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}
