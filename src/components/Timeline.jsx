import TimelineItem from './TimelineItem';
import Gruendung from "../assets/images/Gründerfoto.jpg";
import Coding from "../assets/images/Code Session.jpg";
import Meeting from "../assets/images/Gründerfoto2.jpg";
import Interview from "../assets/videos/Interview_Neu.mp4";
import Kollegen from "../assets/images/Mitarbeiter.jpg";
import Workshop from "../assets/images/Workshop.jpg";

const timelineEvents = [
  {
    year: "2020",
    title: "Die Gründung",
    description:
      "Dr. Daniel Weber und Markus Heller gründen VEKTOR mit dem Ziel, den Mittelstand fit für die Zukunft der Künstlichen Intelligenz zu machen.",
    media: [
      { type: "image", src: Gruendung, title: "Gründerfoto" },
      { type: "video", src: Interview, title: "Interview mit Dr. Stefan Vogt" }
    ],
    showButton: true
  },
  {
    year: "2021",
    title: "Umzug und erstes großes Kundenprojekt",
    description:
      "VEKTOR bezieht ein Büro in München-Haidhausen und realisiert das erste ML-Projekt für einen regional Logistikbetrieb.",
    media: [
      { type: "image", src: Meeting, title: "Intensive Projektbesprechung" }
    ],
    links: [ 
      { label: "Standort München", url: "https://goo.gl/maps/..." }
    ],
    showButton: true
  },
  {
    year: "2022",
    title: "Vergrößerung des Teams und IHK Workshops",
    description:
      "Das Team wächst auf zehn Mitarbeitende und startet gemeinsam mit der IHK Workshops zu KI und Datenschutz.",
    media: [
      { type: "image", src: Kollegen, title: "Unser Team wächst" },
      { type: "image", src: Workshop, title: "IHK KI-Workshop" }
    ],
    links: [
    ],
    showButton: true
  },
  {
    year: "2023",
    title: "Pilotprojekte KI klar & konkret",
    description:
      "Entwicklung des Beratungsmodell „KI klar & konkret“, das Unternehmen Schritt für Schritt von der Idee bis zur Umsetzung begleitet.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      { label: "KI klar & konkret", url: "https://vektor.de/projekte/ki-klar-und-konkret" }
    ],
    showButton: false
  },
  {
    year: "2024",
    title: "Netzwerk für Digitale Transformation",
    description:
      "Wir vergrößern uns räumlich und arbeiten erstmals mit überregionalen IT-Systemhäusern zusammen. Dazu nehmen wir das erste Mal an der Digitalmesse Bayern teil, wo wir live eine KI-gestützte Datenanalyse vorführen.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Netzwerk Digitalisierung Bayern" },
      { type: "image", src: Coding, title: "Kooperative Code-Sprints bei Vektor" }
    ],
    links: [
    ],
    showButton: true
  },
  {
    year: "2025",
    title: "Neue Services",
    description:
      "Das Unternehmen startet ein internes Trainingsprogramm für spezialisierte KI-Entwicklung, besonders für generative Systeme. Außerdem wird der Servicebereich um generative Text- und Bild-KI erweitert.",
    media: [
    ],
    links: [
      {label: (<>Whitepaper "Die Zukunft des deutschen Mittelstands <br /> im Zeitalter der KI"</>), url: "https://vektor.de/services/Whitepaper" }
    ],
    showButton: false
  }
];

function Timeline() {
    return (
    <section id="timeline" className="bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-vektor-dark">
            Unsere Entwicklung
          </h2>
          <p className="text-vektor-navy/80 sm:text-xl">
             Sechs Jahre, ein roter Faden: Wie VEKTOR vom Gründungsteam zum KI-Partner für den Mittelstand wurde.
          </p>
        </div>

        <div className="space-y-8">
          {timelineEvents.map((event) => (
            <TimelineItem
              key={event.year}
              year={event.year}
              title={event.title}
              description={event.description}
              media={event.media}
              links={event.links}
              showButton={event.showButton}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline