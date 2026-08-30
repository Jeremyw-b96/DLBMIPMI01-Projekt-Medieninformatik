import Stefan from "../assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import Markus from "../assets/images/diego-hernandez-MSepzbKFz10-unsplash.jpg";
import Sofia from "../assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import Jonas from "../assets/images/podmatch-GEnCnYhA1J4-unsplash.jpg";
import TeamMember from "./TeamMember";
import Aurora from './Aurora';

const teamMembers = [
    {
        image: Stefan,
        name: "Dr. Stefan Vogt",
        role: "CEO",
        bio: "Bringt komplexe Ideen schnell auf den Punkt und trifft klare Entscheidungen.",
        socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/"
        }
    },
    {
        image: Markus,
        name: "Markus Heller",
        role: "CTO & KI-Entwickler",
        bio: "Entwickelt smarte KI-Architekturen und hält das technische Fundament stabil.",
        socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/"
        }
    },
    {
        image: Sofia,
        name: "Sofia Brandt",
        role: "COO",
        bio: "Strukturiert Prozesse so, dass Projekte reibungslos und effizient laufen.",
        socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/"
        }
    },
    {
        image: Jonas,
        name: "Jonas Richter",
        role: "Marketing & Sale",
        bio: "Verwandelt technische Inhalte in Botschaften, die jeder versteht.",
        socials: {
        facebook: "https://facebook.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/"
        }
    }
];

function Team() {
    return (
        <section id="team" className="relative overflow-hidden bg-vektor-primary py-20">
            <div className="flex pointer-events-none absolute inset-0 z-0 items-center justify-center">
                <div className="h-full w-full blur-[4px] opacity-40">
                    <Aurora
                    colorStops={["#406E8E", "#CBF7ED"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={1}
                    />
                </div>
            </div>
                <div className="relative z-10 px-10 mx-auto max-w-screen-xl lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Unser Team</h2>
                        <p className="font-light text-vektor-accent/90 sm:text-xl">VEKTOR ist ein junges, dynamisches Beratungsunternehmen mit Sitz in München, das sich auf die
                            Einführung und Umsetzung von Künstlicher Intelligenz (KI) in kleinen und mittelständischen Unternehmen spezialisiert hat.</p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                        {teamMembers.map((member) => (
                            <TeamMember
                                key={member.name}
                                image={member.image}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                socials={member.socials}
                            />
                        ))}
                    </div>
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <p className="font-light text-vektor-accent/90 sm:text-xl">Unser Team vereint technisches Know-how, juristisches Fachwissen und Beratungserfahrung. VEKTOR steht für Interdisziplinarität,
                        agile Zusammenarbeit und den Willen, technologische Innovation sinnvoll und verantwortungsvoll einzusetzen.</p>
                    </div>
                </div>
        </section>
    );
}

export default Team;