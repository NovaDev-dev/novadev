"use client";

// Next & React
import Link from "next/link";
import { useState } from "react";
// React Icons
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
// Local Components
import Logo from "../common/Logo"
import { Button } from "../common/Button";

export default function Navbar() {

    // State Management
    const [open, setOpen] = useState(true);

    const sections = [
        { id: "home", label: "home", href: "/" },
        { id: "about", label: "about", href: "/#about" },
        { id: "portfolio", label: "portfolio", href: "/#portfolio" },
        { id: "services", label: "services", href: "/#services" },
        { id: "contact", label: "contact", href: "/#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full py-8 px-24 flex items-center justify-center align-middle bg-primary text-white">
            <Logo className="mr-24"/>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex flex-row items-center space-x-8 font-display text-md ">
                {sections.map((link) => (
                <li key={link.id}>
                    <Link
                        href={link.href}
                        className="p-2 transition-all duration-200  hover:opacity-80 hover:border-b "
                    >
                        {link.label}
                    </Link>
                </li>
                ))}
                <li>
                    <button className="p-2 transition-all duration-200 hover:opacity-80">
                        <FiGithub size={24} />
                    </button>
                </li>
                <li>
                    <button className="p-2 transition-all duration-200 hover:opacity-80">
                        <FiLinkedin size={24} />
                    </button>
                </li>
            <Button className="bg-secondary text-white">Get in Touch</Button> 
            </ul>

            {/* Mobile Hamburger */}
            <div className="block lg:hidden ml-auto p-2 cursor-pointer">
                {open ? (
                    <IoClose size={24} onClick={() => setOpen(false)} />
                ) : (
                    <BsList size={24} onClick={() => setOpen(true)} />
                )}
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                lg:hidden block fixed top-26 left-0 z-40 w-full px-24
                bg-secondary/70 backdrop-blur-md
                transition-all duration-300
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
                `}
            >
                <ul className="flex flex-col font-display border-b">
                    {sections.map((link) => (
                        <li
                            key={link.id}
                            className="
                                py-5
                                text-light
                                cursor-pointer
                                transition-colors duration-200
                                whitespace-nowrap
                            "
                            >
                            <Link href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row space-x-4  py-6">
                    <button className="p-2 transition-all duration-200 hover:opacity-80">
                        <FiGithub size={24} />
                    </button>
                    <button className="p-2 transition-all duration-200 hover:opacity-80">
                        <FiLinkedin size={24} />
                    </button>
                    <Button className="bg-secondary text-white w-full">Get in Touch</Button>
                </div>
            </div>
        </nav>
    );
}
