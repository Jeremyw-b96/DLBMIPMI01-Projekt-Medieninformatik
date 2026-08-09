import TimelineItem from './TimelineItem';

const timelineEvents = [
  {
    year: "2020",
    title: "Die Gründung",
    description:
      "Dr. Daniel Weber, Julia Beer und Jonas Roth gründen VEKTOR mit dem Ziel, den Mittelstand fit für die Zukunft der Künstlichen Intelligenz zu machen.",
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
    title: "Erstes Büro & erstes Kundenprojekt",
    description:
      "VEKTOR bezieht ein Büro in München-Haidhausen und realisiert das erste NLP-Projekt für einen Handwerksbetrieb.",
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
    title: "Wachstum & erste Workshops",
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
    title: "Pilotprojekte & erste Partnerschaften",
    description:
      "VEKTOR entwickelt das Beratungsmodell „KI klar & konkret“, das Unternehmen Schritt für Schritt von der Idee bis zur Umsetzung begleitet.Parallel startet die Produktion einer Kurzfilmreihe über reale KI-Anwendungsfälle.",
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
    title: "Expansion & Netzwerk für Digitale Transformation",
    description:
      "VEKTOR vergrößert sich räumlich und arbeitet erstmals mit überregionalen IT-Systemhäusern zusammen. Die Firma nimmt an der Digitalmesse Bayern teil, wo sie live eine KI-gestützte Datenanalyse vorführt.",
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
    title: "Weiterbildung & neue Services",
    description:
      "Das Unternehmen startet ein internes Trainingsprogramm für ethische KI-Entwicklung, besonders für generative Systeme. Außerdem wird der Servicebereich um generative Text- und Bild-KI erweitert.",
    media: [
      { type: "image", title: "Gründerfoto" },
      { type: "video", title: "Interview mit den Gründern" },
      { type: "image", title: "Whiteboard-Entwurf" }
    ],
    links: [
      { label: "KI-Grundlagen (Paper)", url: "https://arxiv.org" }
    ]
  }
];

function Timeline() {
    return (
    <section id="timeline" className="bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Unsere Entwicklung
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Die wichtigsten Meilensteine von VEKTOR auf dem Weg zu einem
            modernen KI-Beratungsunternehmen.
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