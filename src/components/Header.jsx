import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

import {
  ShoppingBagIcon,
  MoonIcon
} from '@heroicons/react/24/outline'

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <header className='hidden lg:flex w-full'>
      <nav
        className="hidden lg:flex w-full h-14 bg-red-700 justify-between p-4 dark:bg-gray-800"
      >
        <div className="w-auto h-auto">
          <p className="font-black text-principal text-lg text-white">
            <Link className="font-bold text-principal text-white" to="/">VideoGames Store</Link>
          </p>
        </div>
        <div className="flex flex-row space-x-10">
        </div>
        <div className="flex space-x-4">

          <div className="ml-4 flow-root lg:ml-8">
            <button href="#" className="group -m-2 flex items-center p-2">
              <MoonIcon
                className="h-6 w-6 flex-shrink-0 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="ml-4 flow-root lg:ml-8">
            <Link className="group -m-2 flex items-center p-2" to="/checkout">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-white"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-white">{cart.length}</span>
              <span className="sr-only">items in cart, view bag</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;