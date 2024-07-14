import { Menu, X } from "lucide-react";
import { useState } from "react";


const NavLinks = () => {
    return (
        <>
            <a href="/" className="text-dark font-bold">Home</a>
            <a href="/blog" className="text-dark font-bold">Blog</a>
            <a href="/about" className="text-dark font-bold">About</a>
            <a href="/why" className="text-dark font-bold">Why</a>
            <a href="/lesson" className="text-dark font-bold">Start Today</a>
        </>
    )
}

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };

    console.log(isOpen)

    return (
        <>
        <nav className="flex md:w-1/2 xl:w-1/3 justify-end">
            <div className="hidden w-full justify-between md:flex text-midnight-green">
                <NavLinks />
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </nav>
        {isOpen && (
            <div className="flex basis-full flex-col items-center space-y-2 text-midnight-green">
                <NavLinks />
            </div>
        )}
        </>
    );
};

export default Nav;