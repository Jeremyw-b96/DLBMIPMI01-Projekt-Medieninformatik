import logo from "../assets/images/vektor_logo_embedded.svg";

function Footer() {
    return (
        <section className="bg-vektor-dark border-vektor-navy">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <img src={logo} className="h-12" alt="Vektor Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VEKTOR</span>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                        <li>
                            <a href="#" className="me-4 md:me-6 text-vektor-muted rounded-sm hover:bg-vektor-muted/20 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Kontakt</a>
                        </li>
                        <li>
                            <a href="#" className="me-4 md:me-6 text-vektor-muted rounded-sm hover:bg-vektor-muted/20 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Impressum</a>
                        </li>
                        <li>
                            <a href="#" className="me-4 md:me-6 text-vektor-muted rounded-sm hover:bg-vektor-muted/20 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">GitHub</a>
                        </li>
                        <li>
                            <a href="#" className="me-4 md:me-6 text-vektor-muted rounded-sm hover:bg-vektor-muted/20 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-default border-vektor-muted sm:mx-auto lg:my-8" />
                <span className="block text-vektor-muted text-sm text-body sm:text-center"> &copy; 2026 <a href="https://vektor.de" className="hover:underline">Vektor</a>. All Rights Reserved.</span>
            </div>
        </section>
    );
}

export default Footer