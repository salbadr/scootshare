import { NavLink, Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import { useState } from "react";

type NavLinkClassNames = {
    isActive: boolean;
}

type NavLinks = {
    to: string;
    name: string;
}
//Navigation
export default function Nav() {
    const [open, setOpen] = useState(false)

    function handleMobileMenuToggle() {
        setOpen(!open)
    }

    function generateClassNames({ isActive }: NavLinkClassNames) {
        return `hover:text-zinc-900 transition-colors w-full p-2  ${isActive ? 'text-amber-600 rounded-sm bg-amber-100 md:bg-white md:rounded-none md:bg-white ' : ''
            }
        `;
    }

    const navLinks: NavLinks[] = [
        {
            to: '/',
            name: 'Home',
        },
        {
            to: '/about',
            name: 'About',
        }

    ]

    return (<nav className="flex z-50 bg-white justify-between items-center flex-wrap
    border-t border-b border-gray-300 px-6 py-3 sticky top-0 shadow-md shadow-stone-200">
        <div>
            <Link to="/">Logo</Link>
        </div>

        <div className="hidden md:flex gap-5">
            {
                navLinks.map((navLink) => (
                    <NavLink
                        className={generateClassNames}
                        key={navLink.to}
                        to={navLink.to}>
                        {navLink.name}
                    </NavLink >

                ))
            }
        </div>

        <div className="md:hidden">
            <button
                className="text-lg"
                onClick={handleMobileMenuToggle}
                aria-label="Toggle mobile menu"
                aria-expanded={open}
            >
                {!open ? <RxHamburgerMenu /> : <MdClose />}
            </button>
        </div>

        {
            open && <div className="md:hidden flex w-full flex-col mt-3" aria-hidden={!open}>
                {
                    navLinks.map((navLink) => (
                        <NavLink
                            className={generateClassNames}
                            onClick={handleMobileMenuToggle}
                            key={navLink.to}
                            to={navLink.to}>
                            {navLink.name}
                        </NavLink >

                    ))
                }
            </div>
        }
    </nav>

    )
}