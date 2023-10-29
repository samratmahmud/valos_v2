import Image from "next/image";
import Header from "./Header";
import Navbar from "@/components/global/Navbar";

export default function Home() {
  return (
    <div className="bg-cyan-950">
      <Navbar />
      {/* <Header /> */}
    </div>
  );
}
