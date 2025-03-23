import React, { useState } from 'react'
import { FaLeaf } from 'react-icons/fa';
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import ReponsiveMenu from '../ReponsiveMenu';


const NavBarMenu = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Products',
    link: '#',
  },
  {
    id: 3,
    title: 'About',
    link: '#',
  },
  {
    id: 4,
    title: 'Shop',
    link: '#',
  },
  {
    id: 5,
    title: 'Contact',
    link: '#',
  }
]

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  
  return (
    <>
    <nav>
      <div className="container flex justify-between items-center py-4 md:pt-4">
        {/* Logo section Start */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-primary'>Fruit</p>
          <p className='text-secondary'>Hub</p>
          <FaLeaf className='text-green-500'/>
        </div>


        {/* Menu section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6 text-gray-600'>
            {NavBarMenu.map((menu)=>(
              <li key={menu.id}>
                  <a href= {menu.link} className="inline-block py-1 px-3 hover:text-primary hover:shadow-custom font-semibold">{menu.title}</a>
              </li>
            ))}
            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
              <MdOutlineShoppingCart />

            </button>
          </ul>
        </div>
         {/* mobile hamburger Menu section */}
         <div className='md:hidden' onClick={() => setOpen(!open)}>
          <MdMenu className='text-4xl'/>
         </div>
      </div>
    </nav>
   {/* responsive Menu section */}
    <ReponsiveMenu open={open}/>
    </>
  )
}

export default NavBar