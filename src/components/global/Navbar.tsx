"use client";
import Link from "next/link";
import React, {Fragment} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const menuItems = [
  {id: 1, name: "Services", href: "/"},
  {id: 2, name: "Technology", href: "/"},
  {id: 3, name: "Request", href: "/"},
  {id: 4, name: "Contact", href: "/"},
];

function Navbar() {
  const part1 = menuItems.slice(0, menuItems.length / 2);
  const part2 = menuItems.slice(menuItems.length / 2);

  const modifiedMenu = [part1, part2];

  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="lg:py-16 py-8 md:mb-16 mb-4">
      <div className="bg-sky-500 hidden lg:block">
        <div className="container">
          <div className="flex items-center justify-between relative">
            {modifiedMenu.map((part, index) => (
              <div className="flex justify-between items-center flex-[0_0_25%]">
                {part.map((item) => (
                  <div
                    key={item.id}
                    className="text-xl py-5 font-semibold text-white"
                  >
                    <a href={item.href}>{item.name}</a>
                  </div>
                ))}
              </div>
            ))}
            <div className="flex justify-center absolute left-1/2 -translate-x-1/2">
              <span className="block w-[250px] h-[250px] bg-cyan-950 absolute top-[80%] -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10 rotate-45" />
              <img className="" src="/picture/Vector.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="container">
          <div className="flex justify-between items-center gap-10">
            <Link href={"/"}>
              <img className="w-16 md:w-20" src="/picture/Vector.svg" alt="" />
            </Link>
            <div role="button" onClick={toggle}>
              <img src="/picture/icons8-menu.svg" alt="" />
            </div>
          </div>
        </div>
        <Drawer
          style={{width: "70%"}}
          open={open}
          onClose={toggle}
          direction="left"
        >
          <div className="bg-cyan-950 h-full p-5 flex flex-col justify-between">
            <div>
              <div className="mb-8 w-3/4 flex md:justify-center">
                <img className="" src="/picture/Vector.svg" alt="" />
              </div>
              <div>
                {modifiedMenu.map((part, index) => (
                  <div className="flex flex-col w-3/4 text-center">
                    {part.map((item) => (
                      <div
                        role="button"
                        key={item.id}
                        className="text-xl py-3 my-1.5 font-semibold text-white bg-sky-500 rounded-xl"
                      >
                        <a href={item.href}>{item.name}</a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div role="button" className="text-md text-center text-white">
              © 2021 VALOS IT LTD. All rights reserved
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
}

export default Navbar;
