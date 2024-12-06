import { useState } from 'react';
import Link from '@components/link';
import Button from '@components/button';

export default () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <header className="bg-white border-b fixed top-0 inset-x-0 z-10">
                <div className="max-w-7xl mx-auto flex justify-between p-4">
                    <Link href="/">
                        <div className="flex items-center">
                            <img src="/logo.svg" alt="logo" className="w-12" width="48" height="48" />
                            <div className="ml-2">
                                <div className="font-bold leading-none">Build your computer</div>
                                <div className="text-sm leading-none">Create your own computer from scratch</div>
                            </div>
                        </div>
                    </Link>
                    <nav className="hidden sm:flex justify-end items-center gap-2 md:gap-8">
                        <Button href="/">Build your computer</Button>
                    </nav>
                    <div className="sm:hidden">
                        <button type="button" aria-label="menu" onClick={() => setOpen(!isOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden z-20 mb-4 border-b fixed inset-x-0 top-[5rem]`}>
                <div className="space-y-1 bg-white">
                    <Link href="/" className="text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                        Build your computer
                    </Link>
                </div>
            </div>
        </>
    );
};
