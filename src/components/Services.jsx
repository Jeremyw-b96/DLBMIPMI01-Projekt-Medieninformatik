import ServiceCard from './ServiceCard';

const services = [
  {
    title: "KI-Beratung",
    short: "Strategie und Schulungen",
    description: "Aufklärung über Chancen und Grenzen von KI im unternehmerischen Alltag, Workshops für Entscheider und Mitarbeitende, individuelle Fahrpläne zur digitalen Transformation."
  },
  {
    title: "Praxisnahe KI",
    short: "Betreuung während der technischen Umsetzung",
    description: "Entwicklung und Integration von Machine-Learning-Lösungen, Automatisierung von Geschäftsprozessen, Datenanalyse und -infrastruktur."
  },
  {
    title: "Regulatorische Aufklärung",
    short: "Gesetzeskonforme KI-Einführung",
    description: "DSGVO-konforme Umsetzung von KI-Systemen, datenschutzrechtliche Risikoanalysen, rechtliche Begleitung von KI-Projekten."
  }
]

function Services() {     
    return (
        <section id="services" className="bg-white py-20">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
                    Unsere Dienstleistungen
                    </h2>
                    <p className="text-lg text-gray-600">
                    VEKTOR begleitet Unternehmen bei der Einführung von Künstlicher Intelligenz – von
                    der strategischen Beratung über die technische Umsetzung bis hin zur rechtlichen
                    Absicherung.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                        key={service.title}
                        title={service.title}
                        short={service.short}
                        description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    );
}

export default Services