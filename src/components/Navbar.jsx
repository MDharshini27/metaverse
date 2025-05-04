import React from 'react'
import Logo from '/src/assets/logo.png';
import { HiMenuAlt2 , HiMenuAlt3} from "react-icons/hi";
import DarkMode from './DarkMode';


const Navlinks = [
    {
        id:1,
        name: "Home",
        link: "#"
    },
    {
        id:2,
        name: "Product",
        link: "#"
    },
    {
        id:3,
        name: "Pricing",
        link: "#"
    },
    {
        id:4,
        name: "Contact",
        link: "#"
    },
];

const Navbar = () => {
  const[showMenu,setShowMenu]=React.useState(false);
  //!{}-cuz implicit return 
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className='text-white'>
        <div className="container py-2 px-4 md:py-0 md:px-0">
            <div className="flex items-center justify-between ">
                <div className='flex items-center gap-3 ml-0 md:ml-4'>
                    <img src={Logo} alt="" className='h-16'/>
                    <p className='text-2xl'> VR <span className='font-extrabold'>World</span></p>
                </div>
                <div className='flex gap-7'>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            {
                                Navlinks.map(({id,name,link})=>{
                                    return(
                                        <li key={id} className='mr-9'>
                                            <a href={link} className='font-semibold text-xl hover:text-[#00C2FF] hover:border-b-2 hover:border-[#DD0BFF] transition-colors duration-500'>{name}</a>
                                        </li>
                                    );
                                })
                            }
                            {/*DarkMode feature*/}
                            <DarkMode />
                        </ul>
                    </nav>
                    {/* Mobile view sidebar */}
                    <div className='block md:hidden '>
                        {showMenu ? <HiMenuAlt2 onClick={toggleMenu} className='cursor-pointer' size={30}/> : <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer' size={30}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
