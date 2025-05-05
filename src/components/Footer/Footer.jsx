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
                <h1 className="text-3xl md:text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                    Metaverse
                </h1>
                <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolor illum a aut iste expedita.
                </p>
                <br />
                <div>
                <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    <p>Mysore Karnataka</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            
            <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-[#0866ff] duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-[#b60ac2f4] duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-[#0866ff] duration-300" />
                </a>
              </div>
            </div>
            {/* Footer Links section */}
            {/* col-span-2 on the first div makes it stretch across columns 1 and 2. */}
            <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-[#00C2FF]"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-[#00C2FF]"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Location</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-[#02C2FF]"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer

