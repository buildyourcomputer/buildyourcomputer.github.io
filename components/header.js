import Link from '@components/link';
import Button from '@components/button';

export default () => (
    <header className="bg-white border-b fixed top-0 inset-x-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between p-4">
            <Link href="/">
                <div className="flex items-center">
                    <img src="/logo.svg" alt="logo" className="w-12" width="48" height="48" />
                    <div className="ml-2">
                        <div className="font-bold leading-none">Build your computer</div>
                        <div className="text-sm leading-none">Create a computer from scratch</div>
                    </div>
                </div>
            </Link>
            <nav className="hidden sm:flex justify-end items-center gap-2 md:gap-8">
                <Button href="/">Build your computer</Button>
            </nav>
        </div>
    </header>
);
