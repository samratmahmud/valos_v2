import Header from "./home/Header";
import Navbar from "@/components/global/Navbar";
import Cards from "./home/Cards";
import Input from "./home/Input";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <div className="bg-100 bg-no-repeat bg-cover">
      <Navbar />
      <Header />
      <Cards />
      <Input />
      <Footer />
    </div>
  );
}
