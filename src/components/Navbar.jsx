import logo from "../assets/images/vektor_logo_embedded.svg";

const navItems = [
    { label: "Mission", href: "#werte" },
    { label: "Team", href: "#team" },
    { label: "Zeitleiste", href: "#timeline" },
    { label: "Leistungen", href: "#services" }
];

function Navbar() {
    return (
        <section className="dark:bg-gray-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src={logo} className="h-12" alt="Vektor Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VEKTOR</span>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-100 md:flex-row justify-around md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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