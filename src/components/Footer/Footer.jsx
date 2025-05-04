import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <>
    <div className="bg-[#111111] mt-14 rounded-t-3xl  text-white ">
      <div className="container">
        <div className="grid md:grid-cols-3 py-4">
            <div className="py-8 px-4">
                <h1>
                    Metaverse
                </h1>
                <p>

                </p>
                <br />
                <div>
                    <FaLocationArrow />
                    <p>Noida UttarPradesh</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

