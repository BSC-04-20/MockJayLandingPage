import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavBar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            {/* Desktop navbar */}
            <div className="hidden md:flex h-[10vh] w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sticky top-0 z-50 items-center justify-between px-6">
                <span className="text-xl font-imperial text-red-400">
                    Mock by Jay
                </span>

                <div className="flex flex-row text-xl font-imperial text-gray-200 gap-10 items-center">
                    <a href='#home' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300">Home</a>
                    <a href='#artists' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300">Artists</a>
                    <a href='#book' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300">Book</a>
                    <a href='#albums' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300">Albums</a>
                </div>
            </div>

            {/* Mobile navbar */}
            <div className="md:hidden h-[10vh] w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 sticky top-0 z-50 flex items-center justify-between px-6">
                <span className="text-xl font-imperial text-red-400">
                    Mock by Jay
                </span>

                {/* Burger Menu Button */}
                <button 
                    onClick={toggleMenu}
                    className="text-gray-200 hover:text-red-400 transition-colors duration-300 p-2"
                    aria-label="Toggle mobile menu"
                >
                    {isMenuOpen ? (
                        <HiX className="w-6 h-6" />
                    ) : (
                        <HiMenu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed top-[10vh] left-0 w-full h-[calc(100vh-10vh)] bg-black bg-opacity-95 backdrop-filter backdrop-blur-md z-40">
                    <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-imperial text-gray-200">
                        <a href='#home' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300" onClick={toggleMenu}>Home</a>
                        <a href='#artists' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300" onClick={toggleMenu}> Artists </a>
                        <a href='#book' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300" onClick={toggleMenu}>Book</a>
                        <a href='#albums' className="hover:text-red-400 hover:cursor-pointer transition-colors duration-300" onClick={toggleMenu}> Albums </a>
                    </div>
                </div>
            )}
        </>
    )
}