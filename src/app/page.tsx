"use client";
import Header from "./home/Header";
import Navbar from "@/components/global/Navbar";
import Cards from "./home/Cards";
import Input from "./home/Input";
import Footer from "./home/Footer";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

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
