"use client";
import React, {Fragment} from "react";

const menuItems = [
  {id: 1, name: "Services", href: "/services"},
  {id: 2, name: "Technology", href: "/technology"},
  {id: 3, name: "Request", href: "/request"},
  {id: 4, name: "Contact", href: "/contact"},
];

function Navbar() {
  const part1 = menuItems.slice(0, menuItems.length / 2);
  const part2 = menuItems.slice(menuItems.length / 2);

  const modifiedMenu = [part1, part2];

  return (
    <nav className="py-16">
      <div className="bg-blue-600">
        <div className="flex items-center justify-between container relative">
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
    </nav>
  );
}

export default Navbar;
