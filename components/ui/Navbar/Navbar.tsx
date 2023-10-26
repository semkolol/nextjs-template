import Link from 'next/link';
import Image from 'next/image';

import Logo from '/public/vercel.svg';
import SignOutButton from './SignOutButton';

import ThemeSwitcher from '@/components/ui/ThemeSwitcher/ThemeSwitcher'
import NavMenu from '../NavMenu/NavMenu';

import s from './Navbar.module.css';

export default async function Navbar() {

  return (
    <nav className="sticky top-0 text-black bg-white/95 dark:text-white dark:bg-zinc-950/95 z-40 transition-all duration-150">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo + ' flex items-center'} aria-label="Logo">
              <Image src={Logo} alt='logo' height={35} />
            </Link>
          </div>

          <div className="hidden md:flex justify-end flex-1 space-x-8">
            <Link href="/pricing" className='inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer rounded-2xl p-2 text-zinc-800 hover:bg-zinc-200 hover:dark:bg-zinc-900 dark:text-zinc-200 hover:text-black hover:dark:text-zinc-100'>
              Pricing
            </Link>
            <Link href="/signin" className='inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer border rounded-2xl p-2 border-blue-300 bg-blue-200 text-blue-800 hover:bg-blue-300 dark:border-blue-400 dark:bg-blue-300 hover:dark:bg-blue-400 dark:text-blue-800'>
              Get Started
            </Link>
            {false && (
              <Link href="/account" className='inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-zinc-800 hover:bg-zinc-200 hover:dark:bg-zinc-900 dark:text-zinc-200 rounded-md p-1 hover:text-black hover:dark:text-zinc-100'>
                Dashboard
              </Link>
            )}

            {false ? (
              <SignOutButton />
            ) : (
              <Link href="/signin" className='inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer border rounded-2xl p-2 text-zinc-800 hover:bg-zinc-200 hover:dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-200 hover:text-black hover:dark:text-zinc-100'>
                Sign in
              </Link>
            )}

            <ThemeSwitcher />

          </div>
          <NavMenu />
        </div>
      </div>
    </nav >
  );
}
