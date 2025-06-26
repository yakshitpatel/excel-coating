'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDown01Icon } from '@hugeicons-pro/core-stroke-standard';
import { ShoppingBasket03Icon, Call02Icon } from '@hugeicons-pro/core-solid-standard';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartDrawer from './CartDrawer';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  const navigation = [
    { name: 'About', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Why Excel', href: '/why-excel' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <>
      <header className="bg-neutral-950 text-white px-5 md:px-10 lg:px-20 py-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/excel-coating-logo.svg"
                alt="Excel Coatings Logo"
                height={32}
                width={120}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-200 hover:text-white px-2 py-2 bg-neutral-950 hover:bg-neutral-800 rounded-md transition-colors"
                >
                  <div className="text-sm px-2">{item.name}</div>
                </Link>
              ))}
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-2">
              <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-white bg-neutral-950 rounded-lg border border-neutral-950 hover:border-white hover:bg-neutral-800 transition-colors cursor-pointer  ">
                <HugeiconsIcon icon={ShoppingBasket03Icon} className="h-5 w-5" />
                <span className="text-sm">Cart</span>
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </button>

              <button
              onClick={() => window.open('tel:+919826000000', '_blank')}
              className="flex items-center gap-2 px-3 py-2 text-white bg-neutral-950 rounded-lg border border-white hover:bg-neutral-800 transition-colors cursor-pointer">
                <HugeiconsIcon icon={Call02Icon} className="h-5 w-5" />
                <span className="text-sm">Talk to Expert</span>
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
} 