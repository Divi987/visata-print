'use client'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import Image from 'next/image';
import LogoSm from '../../public/images/logo-sm.png'
import LogoLg from '../../public/images/logo-lg.png'
import Navbar from './Navbar';
import { useState } from 'react';

export default function Header () {
    const  [isClicked, setIsClicked ] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
        <div className='p-[10px] md:px-2 lg:px-4 lg:pt-8 shadow-[0_0_10px_#d3d3d3]'>
            <div className="md:px-3 md:py-4 flex justify-between items-center ">
                <div className="m-left flex ">
                    <div className="m-hamburger px-[10px] lg:hidden">
                    <button type="button" onClick={handleClick}>
                        <MenuIcon />
                    </button>
                    </div>
                    <div className="m-searchIcon md:hidden">
                        <SearchIcon />
                    </div>
                    <div className='m-logo-lg hidden md:block h-[30px]'>
                        <Image src={ LogoLg } alt="lg" className="h-[200px] w-[250px]" />
                    </div>
                </div>
                <div className="m-center w-full mx-4">
                    <div className='md:hidden flex justify-center'>
                        <Image src={LogoSm} alt="sm" />
                    </div>
                    <div className='search-bar hidden md:flex item-center relative'>
                        <div className='w-full'>
                            <input type="text"  className='p-2 w-full border border-gray-500 rounded-md text-dark outline-blue-500' placeholder='Search'  />
                        </div>
                        <div className='absolute z-auto right-[10px] top-2 '>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="m-right-links flex ">
                    <div className="m-hamburger px-2 lg:ml-4">
                        <ContactSupportOutlinedIcon />
                    </div>

                    <div className="m-searchIcon lg:ml-4 hidden lg:block">
                        <FolderOpenOutlinedIcon />
                    </div>

                    <div className="m-searchIcon lg:ml-4 hidden lg:block">
                        <PersonOutlineOutlinedIcon />
                    </div>
                   
                    <div className="m-searchIcon lg:ml-4 ">
                        <ShoppingBagOutlinedIcon />
                    </div>
                </div>
            </div>
            <Navbar clicked={isClicked} handleClick={handleClick} />
        </div>
        </>
    )
}