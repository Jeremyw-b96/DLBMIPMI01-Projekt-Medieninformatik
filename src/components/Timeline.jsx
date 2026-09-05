import TimelineItem from './TimelineItem';

const timelineEvents = [
  {
    year: "2020",
    title: "Die Gründung",
    description:
      "Dr. Daniel Weber und Markus Heller gründen VEKTOR mit dem Ziel, den Mittelstand fit für die Zukunft der Künstlichen Intelligenz zu machen.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      { label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
  },
  {
    year: "2021",
    title: "Umzug und erstes großes Kundenprojekt",
    description:
      "VEKTOR bezieht ein Büro in München-Haidhausen und realisiert das erste ML-Projekt für einen regional Logistikbetrieb.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      { label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
  },
  {
    year: "2022",
    title: "Vergrößerung des Teams und IHK Workshops",
    description:
      "Das Team wächst auf zehn Mitarbeitende und startet gemeinsam mit der IHK Workshops zu KI und Datenschutz.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      { label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
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
      { label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
  },
  {
    year: "2024",
    title: "Netzwerk für Digitale Transformation",
    description:
      "Wir vergrößern uns räumlich und arbeiten erstmals mit überregionalen IT-Systemhäusern zusammen. Dazu nehmen wir das erste Mal an der Digitalmesse Bayern teil, wo wir live eine KI-gestützte Datenanalyse vorführen.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      { label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
  },
  {
    year: "2025",
    title: "Neue Services",
    description:
      "Das Unternehmen startet ein internes Trainingsprogramm für spezialisierte KI-Entwicklung, besonders für generative Systeme. Außerdem wird der Servicebereich um generative Text- und Bild-KI erweitert.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      {label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline