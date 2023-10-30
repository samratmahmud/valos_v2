import React from "react";

const cardProps = [
  {
    title:
      "Empower Your Web Projects with the Best Front-End Tools in the Industry",
    contant:
      "We provide a wide range of frontend tools to enhance the user interface and user experience of websites or applications. Our expert team utilizes HTML and CSS editors, JavaScript frameworks, UI libraries, code editors, and debugging tools to develop and optimize your digital presence. With our services, we ensure a seamless and engaging user experience that aligns with your business goals.",
    logo1: "/picture/Group.svg",
    logo2: "/picture/Vector (2).svg",
  },
];

function Cards() {
  return (
    <div>
      <div className="text-5xl font-semibold text-white text-center">
        <p>Empowering Success:</p>
        <p className="text-cyan-400">
          {" "}
          Unleashing the Potential of Technology Tools
        </p>
      </div>
      <div className="text-2xl text-white max-w-[1018px] text-center m-auto font-manrope mb-12">
        With the rapid advancement of technology, these tools continue to
        evolve, offering innovative solutions to address various needs across
        industries. By leveraging the power of technology tools, individuals and
        businesses can unlock new possibilities, streamline operations, and
        drive success in the digital era.
      </div>
    </div>
  );
}

export default Cards;
