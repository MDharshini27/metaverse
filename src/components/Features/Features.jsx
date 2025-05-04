import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
  {
    name: "Captivating Videos",
    icon: (
      <FaCameraRetro className="text-5xl text-[#00C2FF] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Safe Transactions",
    icon: (
      <GiNotebook className="text-5xl text-[#00C2FF] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Reality",
    icon: (
      <SlNote className="text-5xl text-[#00C2FF] group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "700",
  },
];


const Features = () => {
  return (
    <>
    <div className="container sm:min-h-[450px]">
      <div>
        <h1 className="text-3xl font-semibold text-center sm:text-4xl text-white">
          Why Choose Us
        </h1>
        <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 place-items-center my-4">
          {FeaturesData.map((data, index ) =>(
            <div className=" text-white md:w-[25vw] my-4 mx-7 hover:text-black duration-300 rounded-lg  text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-[#111111] hover:bg-gradient-to-r from-[#00C2FF] to-[#DD0BFF] hover:shadow-[0_0_40px_#007cfff0]">
              <div> {data.icon} </div>
              <h1> {data.name}</h1>
              <p>{data.description}</p>
              <a href={data.link} className="group-hover:text-black group-hover:text-bold group-hover:text-xl ">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Features;
