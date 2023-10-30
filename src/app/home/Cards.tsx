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
  {
    title: "Master Cross-Platform Mobile Development",
    contant:
      " Unlock the true potential of your app idea with our expert team of developers. With Flutter's seamless cross-platform capabilities and React Native's unparalleled performance, we create stunning, high-performing mobile applications that cater to both iOS and Android users. From intuitive user interfaces to smooth animations and robust functionalities, we ensure a top-notch user experience that keeps your audience engaged. Let us transform your vision into reality and deliver a mobile app that stands out in the competitive market. Get ready to revolutionize the mobile world with our Flutter and React Native expertise. ",
    logo1: "/picture/layer1.svg",
    logo2: "/picture/Group (1).svg",
  },
  {
    title: "The Ultimate Toolset for Modern Desktop Applications",
    contant:
      "Unlock your true potential with our comprehensive Desktop Tools Service. Designed to enhance your productivity, streamline your workflow, and empower you to achieve more, our service provides a curated collection of powerful desktop tools that cater to your diverse needs. Say goodbye to the hassle of managing multiple software licenses and installations, and say hello to a seamless and efficient work environment.",
    logo1: "/picture/N 1.svg",
    logo2: "/picture/Vector (3).svg",
  },
  {
    title:
      "Efficient and Scalable Backend Solutions: Driving Your Online Presence",
    contant:
      "To deliver an exceptional user experience, our development team has carefully chosen the most suitable backend technologies . These selected technologies empower us to build a robust and efficient backend infrastructure that supports our website's functionality, performance, and scalability. Furthermore, the selected backend technologies offer mechanisms for authentication, authorization, and encryption to ensure the confidentiality and integrity of sensitive information. Regular security updates and patches are provided to address any emerging vulnerabilities and maintain the highest security standards.",
    logo1: "/picture/Group 2023.svg",
    logo2: "/picture/Group 2034.svg",
    logo3: "/picture/Microsoft_.NET_logo 1.svg",
  },
  {
    title:
      "Secure and Reliable Cloud Services: Your Gateway to Digital Success",
    contant:
      "To enhance the user experience for our clients, our developers and technical architects have carefully selected the most suitable cloud tools to optimize our website's performance and scalability. These chosen cloud technologies enable us to efficiently handle various aspects of our website's operations, providing automatic scaling capabilities, allowing us to dynamically allocate computing resources as needed, resulting in a seamless user experience even during peak usage periods.",
    logo1: "/picture/aws logo.svg",
    logo2: "/picture/layer1 (1).svg",
    logo3: "/picture/Group 2014.svg",
  },
  {
    title:
      "From Chaos to Clarity: Maximizing Efficiency with a Well-Organized Database",
    contant:
      "By choosing the best and the most adequate database system technologies, our Team can deliver a seamless and responsive user experience, even when dealing with large data volumes and complex operations. This enhances the overall satisfaction of our clients and contributes to the success of our services. Furthermore, these database technologies provide robust security measures to protect our clients' data from unauthorized access or breaches. They offer mechanisms for data backup and recovery, ensuring the integrity and availability of the information stored in the databases.",
    logo1: "/picture/Group 2028.svg",
    logo2: "/picture/Group 2024.svg",
    logo3: "/picture/Group 2025.svg",
    logo4: "/picture/Group 2027.svg",
    logo5: "/picture/Group 2026.svg",
  },
];

function Cards() {
  return (
    <div className="container">
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
      <div className="grid grid-cols-2 gap-10 mb-20">
        {cardProps.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between px-14 pt-12 pb-16 bg-neutral-400 rounded-[30px] border border-sky-500 max-w-[580px]"
          >
            <div>
              <div className="text-4xl font-bold text-white mb-12">
                {item.title}
              </div>
              <div className="text-2xl text-white mb-6">{item.contant}</div>
            </div>
            <div className="flex flex-wrap gap-9">
              <img src={item.logo1} alt="" />
              <img src={item.logo2} alt="" />
              <img src={item.logo3} alt="" />
              <img src={item.logo4} alt="" />
              <img src={item.logo5} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
