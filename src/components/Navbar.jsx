import { useState } from 'react';
import logo from '../media/DevDine.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold"> <img src={logo} alt="logo.." className='w-18 h-16 mr-2 ' /> </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:bg-fire hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:bg-fire hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-300 hover:bg-fire hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
              <a href="#" className="text-gray-300 hover:bg-fire hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-fire hover:text-white hover:bg-fire focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fire "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-fire hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-fire hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-fire hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
            <a href="#" className="text-gray-300 hover:bg-fire hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cart</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;