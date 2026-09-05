import { useState, useEffect } from "react";
import logo from "../assets/images/vektor_logo_embedded.svg";

const navItems = [
    { label: "Leistungen", href: "#services" },
    { label: "Team", href: "#team" },
    { label: "Zeitleiste", href: "#timeline" },
    { label: "Mission", href: "#werte" },
    { label: "Connect", href: "#connect" }
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return (
        <section id="navbar" className="sticky top-0 z-50 bg-vektor-dark border-vektor-navy">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="Vektor Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">VEKTOR</span>
                </div>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-vektor-muted rounded-lg md:hidden hover:bg-vektor-navy focus:outline-none focus:ring-2 focus:ring-vektor-navy" aria-controls="mobile-menu" aria-expanded={isOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                {isOpen && (
                    <>
                        <div className="fixed inset-0 z-10 backdrop-blur-xs bg-black/70 md:hidden" onClick={() => setIsOpen(false)} aria-hidden="true"/>
                            <div id="mobile-menu" className="fixed top-0 right-0 z-20 h-screen w-60 bg-vektor-navy/70 rounded shadow-lg md:hidden">
                                <div className="flex items-center justify-between px-4 py-4">
                                    <span className="text-lg font-medium text-white">Menu</span>
                                    <button type="button" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center w-10 h-10 text-sm text-vektor-muted rounded-lg hover:bg-vektor-dark focus:outline-none focus:ring-2 focus:ring-vektor-dark" aria-label="Close menu">
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>
                                <ul className="font-medium flex flex-col p-4">
                                    {navItems.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} onClick={() => setIsOpen(false)} className="block py-3 px-3 text-white rounded-sm hover:bg-vektor-dark hover:text-vektor-accent transition-colors">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute bottom-0 left-0 w-full p-4 text-center text-vektor-muted text-sm">
                                    &copy; {new Date().getFullYear()} Vektor
                                </div>
                            </div>
                    </>
                )}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row justify-around md:space-x-8 rtl:space-x-reverse md:mt-0">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="block py-2 px-3 text-white rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-vektor-accent md:p-0 transition-colors">
                                    {item.label}
                                </a>
                            </li>))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Navbar