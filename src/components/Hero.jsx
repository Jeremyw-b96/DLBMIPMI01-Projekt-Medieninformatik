import heroImage from "../assets/images/hero2.jpg";
import ScrollExpand from "./ScrollExpand";

function Hero() {
    return (
        <section className="min-h-fit bg-vektor-dark">
            <ScrollExpand
                src={heroImage}
                alt="Das VEKTOR-Team bei der Projektarbeit am Whiteboard"
                scrollHint="Scroll innerhalb des Bildes, um mehr zu erfahren"
                useWindowScroll
                >
                <div className="flex flex-col justify-center max-w-1/2 mx-auto min-h-[70vh]">
                    <h1 className="text-white mb-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-shadow-lg backdrop-blur-md">
                        Wir machen KI verständlich, praxistauglich und vor allem gewinnbringend.
                    </h1>
                    <p className="mb-6 text-md sm:text-xl font-normal text-white/95 leading-relaxed text-shadow-lg backdrop-blur-md">
                        VEKTOR macht Künstliche Intelligenz für den Mittelstand greifbar: mit klarer Strategie, fundierter Technik und rechtlicher Sicherheit. Ganz ohne Buzzwords.
                    </p>
                    <div className="flex flex-wrap sm:flex-row justify-center items-stretch sm:items-center gap-6 mt-16 pt-4">
                        <a href="#team" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-vektor-accent rounded-lg bg-vektor-primary hover:bg-vektor-navy transition-colors focus:ring-2 focus:ring-vektor-accent">
                            Unser Team
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                        </a>
                        <a href="#timeline" className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-vektor-accent rounded-lg bg-vektor-primary hover:bg-vektor-navy transition-colors focus:ring-2 focus:ring-vektor-accent">
                            <svg className="w-6 h-6 pr-2 text-white/90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/></svg>
                            Unternehmenshistorie
                        </a>
                    </div>
                </div>
            </ScrollExpand>
        </section>
    );
}

export default Hero;