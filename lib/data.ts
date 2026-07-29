export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/missione', label: 'Missione' },
  { href: '/progetti', label: 'Progetti' },
  { href: '/news', label: 'News' },
  { href: '/eventi', label: 'Eventi' },
  { href: '/diventa-socio', label: 'Diventa Socio' },
  { href: '/sostienici', label: 'Sostienici' },
  { href: '/contatti', label: 'Contatti' },
]

export const IMPACT_STATS = [
  { value: 48, suffix: '+', label: 'Progetti completati', description: 'Iniziative concrete sul territorio' },
  { value: 1240, suffix: '+', label: 'Soci attivi', description: 'Persone che credono nel cambiamento' },
  { value: 12500, suffix: '+', label: 'Persone supportate', description: 'Famiglie e individui aiutati' },
  { value: 86, suffix: '+', label: 'Partner istituzionali', description: 'Enti e organizzazioni alleate' },
  { value: 320, suffix: '+', label: 'Eventi organizzati', description: 'Momenti di incontro e crescita' },
]

export interface Project {
  id: string
  title: string
  category: string
  categoryColor: string
  description: string
  image: string
  href: string
  featured: boolean
  slug: string
  date?: string
  location?: string
  partners?: string[]
  highlights?: { label: string; value: string }[]
  fullDescription?: string[]
  gallery?: { src: string; alt: string }[]
  externalUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'tirocinio-microsoft',
    slug: 'tirocinio-microsoft',
    title: 'Tirocinio con Microsoft Italia',
    category: 'Lavoro',
    categoryColor: 'sky',
    date: '2023-11-15',
    location: 'Milano',
    description:
      'I nostri ragazzi hanno svolto un tirocinio presso la mensa aziendale di Compass Group Italia grazie a Microsoft Italia, dimostrando eccellenza, amore e inclusione nel mondo del lavoro.',
    image: '/images/projects/tirocinio-microsoft.png',
    href: '/progetti/tirocinio-microsoft',
    featured: true,
    partners: ['Microsoft Italia', 'Compass Group Italia'],
    highlights: [
      { label: 'Tirocinanti', value: '6 ragazzi' },
      { label: 'Durata', value: '3 mesi' },
      { label: 'Inserimenti lavorativi', value: '4' },
    ],
    fullDescription: [
      'Grazie alla collaborazione con Microsoft Italia e Compass Group Italia, sei giovani con disabilità hanno avuto l\'opportunità di svolgere un tirocinio lavorativo presso la mensa aziendale della sede milanese di Microsoft.',
      'Il progetto nasce dalla volontà comune di dimostrare che l\'inclusione lavorativa non è solo possibile, ma porta valore reale alle aziende. I tirocinanti hanno lavorato fianco a fianco con i colleghi di Compass Group, occupandosi della preparazione e del servizio pasti, della gestione della sala e del supporto logistico.',
      'Il risultato è stato straordinario: quattro dei sei tirocinanti hanno ottenuto un contratto di lavoro al termine del periodo, e tutti hanno riferito un aumento significativo della propria autostima e delle competenze sociali. L\'esperienza ha dimostrato che, con il giusto supporto e una cultura aziendale aperta, le persone con disabilità possono eccellere in qualsiasi contesto lavorativo.',
      'Questo progetto rappresenta un modello replicabile che Rete Italiana Disabili ETS intende estendere ad altre aziende partner sul territorio nazionale, costruendo ponti concreti tra il mondo della disabilità e quello del lavoro.',
    ],
    gallery: [
      { src: '/images/projects/tirocinio-microsoft.png', alt: 'I tirocinanti al lavoro nella mensa aziendale' },
      { src: '/images/projects/work.png', alt: 'Momento di formazione con il team di Compass Group' },
      { src: '/images/projects/school.png', alt: 'Cerimonia di consegna degli attestati' },
    ],
  },
  {
    id: 'osteopatia-autismo',
    slug: 'osteopatia-autismo',
    title: 'Osteopatia e Autismo',
    category: 'Salute',
    categoryColor: 'magenta',
    date: '2023-09-01',
    location: 'Catania',
    description:
      'Progetto in collaborazione con Abaton Onlus a Catania: cicli di trattamenti osteopatici per migliorare il benessere fisico ed emotivo delle persone nello spettro autistico.',
    image: '/images/projects/osteopatia-autismo.png',
    href: '/progetti/osteopatia-autismo',
    featured: true,
    partners: ['Abaton Onlus', 'Comune di Catania'],
    highlights: [
      { label: 'Pazienti trattati', value: '28' },
      { label: 'Cicli di trattamento', value: '3 per paziente' },
      { label: 'Miglioramenti rilevati', value: '82%' },
    ],
    fullDescription: [
      'Il progetto "Osteopatia e Autismo" nasce dalla collaborazione tra Rete Italiana Disabili ETS e Abaton Onlus, con il patrocinio del Comune di Catania. L\'obiettivo è esplorare e documentare i benefici dell\'osteopatia come approccio complementare per le persone nello spettro autistico.',
      'L\'osteopatia agisce sul sistema nervoso autonomo attraverso tecniche manuali dolci, contribuendo a ridurre la tensione muscolare, migliorare la qualità del sonno e favorire una maggiore regolazione sensoriale. Per molte persone con autismo, questi aspetti rappresentano sfide quotidiane significative che influenzano la qualità della vita.',
      'I 28 partecipanti al progetto — bambini e adulti seguiti per un ciclo di tre trattamenti ciascuno — hanno mostrato miglioramenti documentati nell\'82% dei casi, con benefici che vanno dalla riduzione dell\'ipersensibilità sensoriale al miglioramento del sonno e della comunicazione. I genitori e i caregiver hanno segnalato un clima familiare più sereno e una maggiore partecipazione alle attività quotidiane.',
      'Il progetto prevede una seconda fase con un campione più ampio e la pubblicazione di un report scientifico in collaborazione con l\'Università di Catania.',
    ],
    gallery: [
      { src: '/images/projects/osteopatia-autismo.png', alt: 'Seduta di osteopatia con un giovane paziente' },
      { src: '/images/projects/health.png', alt: 'Il team di osteopati di Abaton Onlus' },
      { src: '/images/projects/salute-mentale-webinar.png', alt: 'Incontro con i genitori dei partecipanti' },
    ],
  },
  {
    id: 'diversamente-divertente',
    slug: 'diversamente-divertente',
    title: 'Diversamente Divertente',
    category: 'Eventi',
    categoryColor: 'orange',
    date: '2024-06-22',
    location: 'Zoomarine, Pomezia (Roma)',
    description:
      'Quinta edizione dell\'evento in partnership con Zoomarine: una giornata di divertimento e inclusione con tutte le attività del parco, aperta a soci, famiglie e amici.',
    image: '/images/projects/diversamente-divertente.png',
    href: '/progetti/diversamente-divertente',
    featured: true,
    partners: ['Zoomarine Italia', 'Regione Lazio'],
    highlights: [
      { label: 'Edizioni realizzate', value: '5' },
      { label: 'Partecipanti 2024', value: 'oltre 400' },
      { label: 'Attività inclusive', value: '12' },
    ],
    fullDescription: [
      'Giunta alla sua quinta edizione, "Diversamente Divertente" è diventata una delle iniziative più attese dell\'anno per soci, famiglie e amici di Rete Italiana Disabili ETS. La giornata si svolge in partnership con Zoomarine, parco acquatico e tematico di Pomezia, che mette a disposizione l\'intera struttura con accesso facilitato e staff formato all\'accoglienza inclusiva.',
      'L\'evento non è solo una giornata di svago: è una dimostrazione pratica di come i luoghi di divertimento possano e debbano essere accessibili a tutti. Il parco viene valutato preventivamente dal nostro team di esperti di accessibilità, che collabora con lo staff di Zoomarine per individuare percorsi, adattare attività e formare il personale.',
      'Tra le attività dell\'edizione 2024: spettacolo con i delfini con sessioni tattili dedicate, giostre adattate per carrozzine, area relax attrezzata per persone con sensibilità sensoriale, laboratori creativi inclusivi e un momento dedicato ai più piccoli con i personaggi del parco. Oltre 400 persone hanno partecipato, provenienti da tutto il Lazio.',
      'Per l\'edizione 2025 stiamo lavorando a un programma ancora più ricco, con l\'inclusione di nuovi partner e l\'estensione del format ad altre regioni italiane.',
    ],
    gallery: [
      { src: '/images/projects/diversamente-divertente.png', alt: 'Partecipanti allo show dei delfini' },
      { src: '/images/projects/sport-inclusivo.png', alt: 'Attività acquatiche adattate' },
      { src: '/images/projects/mobility.png', alt: 'Percorsi accessibili nel parco' },
    ],
  },
  {
    id: 'accademia-digitale',
    slug: 'accademia-digitale',
    title: 'Accademia Digitale delle Diversità',
    category: 'Formazione',
    categoryColor: 'blue',
    date: '2023-01-15',
    location: 'Online',
    description:
      'Piattaforma digitale con corsi online gratuiti, biblioteca di risorse e webinar per approfondire i temi della disabilità, rivolti a famiglie, scuole, professionisti e istituzioni.',
    image: '/images/projects/accademia-digitale.png',
    href: '/progetti/accademia-digitale',
    featured: false,
    externalUrl: 'https://www.youtube.com/@Accademiadigitaledellediversit',
    partners: ['YouTube Italia', 'Ministero dell\'Istruzione', 'ENAC'],
    highlights: [
      { label: 'Corsi disponibili', value: '24' },
      { label: 'Iscritti', value: 'oltre 3.200' },
      { label: 'Ore di contenuto', value: '180+' },
    ],
    fullDescription: [
      'L\'Accademia Digitale delle Diversità è la piattaforma formativa online di Rete Italiana Disabili ETS, nata con l\'obiettivo di rendere accessibili a tutti — famiglie, insegnanti, professionisti e istituzioni — i saperi necessari per costruire una società più inclusiva.',
      'La piattaforma offre corsi video gratuiti, webinar live con esperti, una biblioteca di risorse scaricabili e percorsi formativi certificati. I contenuti spaziano dalla normativa sulla disabilità alla psicologia dello sviluppo, dalla comunicazione aumentativa e alternativa (CAA) all\'accessibilità digitale, dalla gestione del caregiver burnout all\'orientamento ai servizi sociali.',
      'Tra i webinar più seguiti: "Autismo e neurodivergenza: cosa sapere", "Diritti e sussidi: la guida pratica per le famiglie", "Scuola inclusiva: strumenti per gli insegnanti di sostegno" e "Salute mentale e disabilità: supporto tra pari". Ogni webinar è disponibile in replica con sottotitoli e trascrizione integrale.',
      'Con oltre 3.200 iscritti e 180 ore di contenuto disponibili, l\'Accademia Digitale delle Diversità è oggi uno dei principali punti di riferimento online per la formazione sull\'inclusione in Italia. Il canale YouTube collegato conta decine di migliaia di visualizzazioni mensili.',
    ],
    gallery: [
      { src: '/images/projects/accademia-digitale.png', alt: 'Schermata della piattaforma Accademia Digitale' },
      { src: '/images/projects/salute-mentale-webinar.png', alt: 'Webinar live con esperta di psicologia' },
      { src: '/images/projects/school.png', alt: 'Corso online per insegnanti di sostegno' },
    ],
  },
  {
    id: 'convegno-autismo-neurodivergenze',
    slug: 'convegno-autismo-neurodivergenze',
    title: 'Convegno: Autismo e Neurodivergenze',
    category: 'Sensibilizzazione',
    categoryColor: 'yellow',
    date: '2024-04-02',
    location: 'Palazzo della Cultura, Catania',
    description:
      'In collaborazione con il Comune di Catania e il patrocinio dell\'ARS, evento al Palazzo della Cultura per approfondire autismo e neurodivergenza con psicomotricisti, osteopati e psicologi.',
    image: '/images/projects/convegno-autismo.png',
    href: '/progetti/convegno-autismo-neurodivergenze',
    featured: false,
    partners: ['Comune di Catania', 'Assemblea Regionale Siciliana (ARS)', 'Abaton Onlus'],
    highlights: [
      { label: 'Esperti presenti', value: '12' },
      { label: 'Partecipanti', value: 'oltre 250' },
      { label: 'Ore di formazione', value: '8' },
    ],
    fullDescription: [
      'Il convegno "Autismo e Neurodivergenze" si è tenuto il 2 aprile 2024 — Giornata Mondiale per la Consapevolezza sull\'Autismo — presso il Palazzo della Cultura di Catania. L\'evento, organizzato in collaborazione con il Comune di Catania e con il patrocinio dell\'Assemblea Regionale Siciliana, ha riunito oltre 250 partecipanti tra familiari, operatori, insegnanti e istituzioni.',
      'Il programma ha coperto un\'intera giornata di lavori, con sessioni mattutine dedicate all\'aggiornamento scientifico — interventi di neuropsichiatri, psicologi, psicomotricisti e osteopati — e sessioni pomeridiane dedicate alla condivisione di esperienze, buone pratiche e strumenti operativi. La tavola rotonda conclusiva ha visto la partecipazione di rappresentanti istituzionali e associativi.',
      'Tra i temi trattati: nuovi modelli diagnostici e approcci terapeutici per l\'autismo; il ruolo della famiglia nel percorso di crescita; strumenti di comunicazione aumentativa e alternativa; inclusione scolastica e lavorativa; diritti e accesso ai servizi in Sicilia. Il convegno è stato accreditato per la formazione continua degli operatori sociosanitari.',
      'Gli atti del convegno sono disponibili per il download sull\'Accademia Digitale delle Diversità. La prossima edizione è in programma per aprile 2025 con un format ampliato e la partecipazione di relatori internazionali.',
    ],
    gallery: [
      { src: '/images/projects/convegno-autismo.png', alt: 'Panel di esperti al Palazzo della Cultura di Catania' },
      { src: '/images/projects/accademia-digitale.png', alt: 'Sessione interattiva con i partecipanti' },
      { src: '/images/projects/school.png', alt: 'Tavola rotonda con rappresentanti istituzionali' },
    ],
  },
  {
    id: 'sport-per-tutti',
    slug: 'sport-per-tutti',
    title: 'Sport Per Tutti',
    category: 'Sport',
    categoryColor: 'green',
    date: '2024-05-18',
    location: 'Ciampino (Roma)',
    description:
      'Terza edizione del progetto che coinvolge la cittadinanza in attività sportive inclusive — baskin, sitting volley, tiro con l\'arco, rugby in carrozzina — in collaborazione con AISM e club sportivi locali.',
    image: '/images/projects/sport-inclusivo.png',
    href: '/progetti/sport-per-tutti',
    featured: false,
    partners: ['AISM – Associazione Italiana Sclerosi Multipla', 'Comune di Ciampino', 'CONI Lazio'],
    highlights: [
      { label: 'Sport praticati', value: '6' },
      { label: 'Partecipanti', value: 'oltre 180' },
      { label: 'Associazioni sportive', value: '8 partner' },
    ],
    fullDescription: [
      '"Sport Per Tutti" è giunto alla sua terza edizione con il record di partecipanti: oltre 180 persone — con e senza disabilità — hanno preso parte alle attività sportive inclusive organizzate a Ciampino in collaborazione con AISM Lazio, il Comune di Ciampino e otto associazioni sportive del territorio.',
      'Le discipline proposte includono baskin (basket inclusivo), sitting volley, tiro con l\'arco adaptato, rugby in carrozzina, atletica adattata e nuoto libero con assistenza qualificata. Ogni disciplina è guidata da istruttori certificati nel settore dello sport adattato e affiancati da volontari formati da Rete Italiana Disabili ETS.',
      'L\'obiettivo non è solo sportivo: è dimostrare attraverso l\'esperienza diretta che lo sport può essere uno straordinario veicolo di incontro e superamento delle barriere. Molti partecipanti non avevano mai praticato uno sport adattato prima di questa giornata, e diversi di loro hanno poi continuato iscrivendosi a club sportivi nel loro territorio.',
      'Per la quarta edizione, prevista a primavera 2025, stiamo lavorando a un format itinerante che porterà il progetto in tre città del Lazio contemporaneamente, con una grande festa finale a Roma.',
    ],
    gallery: [
      { src: '/images/projects/sport-inclusivo.png', alt: 'Atleti in carrozzina durante la partita di baskin' },
      { src: '/images/projects/diversamente-divertente.png', alt: 'Sessione di tiro con l\'arco adattato' },
      { src: '/images/projects/mobility.png', alt: 'Premiazione finale con tutte le associazioni partner' },
    ],
  },
  {
    id: 'sportello-legale',
    slug: 'sportello-legale',
    title: 'Sportello Legale Famiglie e Disabilità',
    category: 'Diritti',
    categoryColor: 'coral',
    date: '2022-10-01',
    location: 'Roma, Pomezia, Velletri',
    description:
      'Punto di orientamento e consulenza legale gratuita per famiglie e persone con disabilità su invalidità civile, pensioni, INPS, accompagnamento e amministrazioni di sostegno. Sedi a Roma, Pomezia e Velletri.',
    image: '/images/projects/sportello-legale.png',
    href: '/progetti/sportello-legale',
    featured: false,
    partners: ['Ordine degli Avvocati di Roma', 'Patronato ACLI', 'Comune di Pomezia'],
    highlights: [
      { label: 'Persone assistite', value: 'oltre 600' },
      { label: 'Sedi attive', value: '3' },
      { label: 'Avvocati volontari', value: '14' },
    ],
    fullDescription: [
      'Lo Sportello Legale Famiglie e Disabilità è uno dei servizi più concreti e richiesti di Rete Italiana Disabili ETS. Attivo dal 2022 con sede principale a Roma e sportelli secondari a Pomezia e Velletri, offre consulenza legale gratuita a persone con disabilità e alle loro famiglie su tutte le questioni legate ai diritti e ai benefici.',
      'I 14 avvocati volontari dello sportello — afferenti all\'Ordine degli Avvocati di Roma — forniscono orientamento e assistenza su: riconoscimento dell\'invalidità civile e delle percentuali di handicap; accesso alle pensioni e agli assegni INPS (pensione di inabilità, assegno di accompagnamento); amministrazione di sostegno e tutela legale; ricorsi contro dinieghi di riconoscimento; accesso ai servizi sociali e sociosanitari; diritti lavorativi delle persone con disabilità.',
      'Dall\'apertura ad oggi, oltre 600 persone hanno ricevuto assistenza, con un tasso di risoluzione positiva dei casi del 78%. Molte situazioni riguardano famiglie che non sapevano di avere diritto a sussidi o servizi: il semplice orientamento ha spesso cambiato in modo significativo la loro qualità di vita.',
      'Lo sportello è accessibile su appuntamento, con possibilità di colloquio in presenza o telematico. Per fissare un appuntamento è possibile contattarci attraverso il modulo sul sito o chiamare il numero dedicato.',
    ],
    gallery: [
      { src: '/images/projects/sportello-legale.png', alt: 'Colloquio di consulenza legale gratuita' },
      { src: '/images/projects/school.png', alt: 'Sede dello sportello a Roma' },
      { src: '/images/projects/tirocinio-microsoft.png', alt: 'Incontro formativo per gli avvocati volontari' },
    ],
  },
  {
    id: 'salute-mentale-webinar',
    slug: 'salute-mentale-webinar',
    title: 'Salute Mentale: Caregiver e Benessere',
    category: 'Salute',
    categoryColor: 'magenta',
    date: '2024-03-15',
    location: 'Online – Accademia Digitale',
    description:
      'Evento online sull\'Accademia Digitale delle Diversità dedicato al ruolo del caregiver, all\'intelligenza emotiva e all\'importanza dell\'esperto per esperienza nel supporto tra pari.',
    image: '/images/projects/salute-mentale-webinar.png',
    href: '/progetti/salute-mentale-webinar',
    featured: false,
    externalUrl: 'https://youtube.com/@accademiadigitaledellediversit',
    partners: ['Ordine degli Psicologi del Lazio', 'Accademia Digitale delle Diversità'],
    highlights: [
      { label: 'Spettatori live', value: '480' },
      { label: 'Visualizzazioni replay', value: 'oltre 2.100' },
      { label: 'Esperti relatori', value: '4' },
    ],
    fullDescription: [
      'Il webinar "Salute Mentale: Caregiver e Benessere" si è tenuto il 15 marzo 2024 sull\'Accademia Digitale delle Diversità, con la partecipazione di 480 persone in diretta e oltre 2.100 visualizzazioni del replay nelle settimane successive. L\'evento ha affrontato un tema spesso trascurato: il benessere psicologico di chi si prende cura quotidianamente di una persona con disabilità.',
      'I quattro relatori — una psicologa clinica, un\'esperta in intelligenza emotiva, un caregiver con esperienza diretta e un rappresentante del supporto tra pari — hanno offerto prospettive complementari su come prevenire e gestire il burnout del caregiver, riconoscere i segnali di stress cronico, costruire reti di supporto e trovare spazi personali di recupero.',
      'Tra i temi affrontati: il concetto di "caregiver invisibile" e il mancato riconoscimento istituzionale; strategie pratiche di gestione dello stress e regolazione emotiva; l\'importanza del peer support (supporto tra pari) come risorsa complementare alla psicoterapia; i servizi di sollievo disponibili sul territorio. Il webinar è stato accreditato come formazione continua per psicologi.',
      'La registrazione integrale con sottotitoli è disponibile sul canale YouTube dell\'Accademia Digitale delle Diversità. Una serie di follow-up con gruppi di ascolto online è stata attivata nelle settimane successive.',
    ],
    gallery: [
      { src: '/images/projects/salute-mentale-webinar.png', alt: 'Panel dei relatori durante il webinar' },
      { src: '/images/projects/accademia-digitale.png', alt: 'Schermata del webinar in diretta' },
      { src: '/images/projects/osteopatia-autismo.png', alt: 'Sessione di domande e risposte con il pubblico' },
    ],
  },
  {
    id: 'questa-citta-e-anche-mia',
    slug: 'questa-citta-e-anche-mia',
    title: 'Questa Città è Anche Mia',
    category: 'Sensibilizzazione',
    categoryColor: 'yellow',
    date: '2023-12-03',
    location: 'Ciampino (Roma)',
    description:
      'Camminata empatica nelle vie di Ciampino per la Giornata Internazionale dei Diritti delle Persone con Disabilità, con associazioni, istituzioni e il cartone RAI "Lampadino e Caramella".',
    image: '/images/projects/mobility.png',
    href: '/progetti/questa-citta-e-anche-mia',
    featured: false,
    partners: ['Comune di Ciampino', 'RAI Kids – Lampadino e Caramella', 'Proloco Ciampino'],
    highlights: [
      { label: 'Partecipanti', value: 'oltre 500' },
      { label: 'Associazioni aderenti', value: '18' },
      { label: 'Bambini coinvolti', value: '200+' },
    ],
    fullDescription: [
      '"Questa Città è Anche Mia" è l\'evento che Rete Italiana Disabili ETS organizza ogni anno il 3 dicembre, Giornata Internazionale dei Diritti delle Persone con Disabilità. La terza edizione, tenutasi a Ciampino, ha visto la partecipazione di oltre 500 persone e 18 associazioni del territorio.',
      'La giornata si apre con una camminata empatica: percorrere le strade della città con una carrozzina, una benda sugli occhi o un ostacolo uditivo, per sperimentare direttamente le barriere che le persone con disabilità incontrano ogni giorno. Un\'esperienza che non lascia indifferenti e che genera una comprensione autentica, non mediata da statistiche o discorsi.',
      'Quest\'anno la grande novità è stata la partecipazione dei personaggi di "Lampadino e Caramella", il cartone animato RAI dedicato all\'inclusione, che ha animato la parte dedicata ai bambini con laboratori, letture animate e momenti interattivi. Oltre 200 bambini hanno partecipato alle attività, portando con sé genitori e nonni e rendendo l\'evento un vero momento di comunità.',
      'Al termine della camminata, una tavola rotonda con il Sindaco di Ciampino, rappresentanti dell\'ASL e delle associazioni ha prodotto un documento di proposte concrete per l\'abbattimento delle barriere architettoniche nel comune, poi presentato in Consiglio Comunale.',
    ],
    gallery: [
      { src: '/images/projects/mobility.png', alt: 'La camminata empatica nelle vie di Ciampino' },
      { src: '/images/projects/diversamente-divertente.png', alt: 'I bambini con i personaggi di Lampadino e Caramella' },
      { src: '/images/projects/convegno-autismo.png', alt: 'Tavola rotonda conclusiva con le istituzioni' },
    ],
  },
  {
    id: 'concorso-mondo-senza-barriere',
    slug: 'concorso-mondo-senza-barriere',
    title: 'Concorso "Un Mondo Senza Barriere"',
    category: 'Arte e Cultura',
    categoryColor: 'sky',
    date: '2024-02-01',
    location: 'Nazionale',
    description:
      'Prima edizione del Concorso Nazionale di Poesia e Pittura in collaborazione con ENAC, aperto a tutti dai 12 anni. Le opere migliori saranno esposte in una mostra dedicata.',
    image: '/images/projects/digital.png',
    href: '/progetti/concorso-mondo-senza-barriere',
    featured: false,
    externalUrl: 'https://enac-online.it/un-mondo-senza-barriere/',
    partners: ['ENAC – Ente Nazionale delle Associazioni di Categoria', 'Ministero della Cultura'],
    highlights: [
      { label: 'Opere pervenute', value: '340' },
      { label: 'Regioni rappresentate', value: '18' },
      { label: 'Categorie', value: 'Poesia e Pittura' },
    ],
    fullDescription: [
      'La prima edizione del Concorso Nazionale di Poesia e Pittura "Un Mondo Senza Barriere" nasce dalla collaborazione tra Rete Italiana Disabili ETS e ENAC, con l\'obiettivo di utilizzare l\'arte come linguaggio universale per parlare di inclusione, disabilità e abbattimento delle barriere — fisiche, culturali e mentali.',
      'Il concorso è aperto a tutti i cittadini italiani dai 12 anni di età, senza distinzione di disabilità o provenienza. Due le categorie: poesia (componimento in verso libero o metrico, massimo 40 versi) e pittura/illustrazione (tecnica libera, formato massimo 50x70 cm). La prima edizione ha ricevuto 340 opere, provenienti da 18 regioni italiane: un risultato che ha superato ogni aspettativa.',
      'Una giuria qualificata — composta da un critico letterario, un artista visivo, una psicologa e una rappresentante di Rete Italiana Disabili ETS — ha selezionato le 30 opere finaliste, poi sottoposte al voto online della comunità. Le dieci opere vincitrici sono state esposte in una mostra itinerante allestita prima a Roma, poi a Milano e a Catania.',
      'Per la seconda edizione, in programma per il 2025, sono previste nuove categorie (fotografia e cortometraggio) e una collaborazione con le scuole medie e superiori per avvicinare i giovani al tema dell\'inclusione attraverso l\'espressione artistica.',
    ],
    gallery: [
      { src: '/images/projects/digital.png', alt: 'Alcune delle opere finaliste del concorso' },
      { src: '/images/projects/school.png', alt: 'Inaugurazione della mostra a Roma' },
      { src: '/images/projects/convegno-autismo.png', alt: 'Premiazione dei vincitori' },
    ],
  },
  {
    id: 'dynamo-camp',
    slug: 'dynamo-camp',
    title: 'Dynamo Camp: Terapia Ricreativa',
    category: 'Salute',
    categoryColor: 'green',
    date: '2023-07-01',
    location: 'Pistoia, Appennino Toscano',
    description:
      'Gli iscritti di Rete Italiana Disabili possono accedere a Dynamo Camp, primo camp di Terapia Ricreativa in Italia sull\'Appennino Toscano, che ospita bambini e ragazzi malati e le loro famiglie.',
    image: '/images/projects/health.png',
    href: '/progetti/dynamo-camp',
    featured: false,
    partners: ['Dynamo Camp Onlus', 'Fondazione Dynamo'],
    highlights: [
      { label: 'Bambini ospitati', value: '1.200 l\'anno' },
      { label: 'Programmi', value: '6 annuali' },
      { label: 'Famiglie supportate', value: 'Family Camp incluso' },
    ],
    fullDescription: [
      'Dynamo Camp, situato sulle colline della Val di Bisenzio nell\'Appennino Toscano, è il primo camp di Terapia Ricreativa in Italia. Fondato nel 2007, ospita ogni anno circa 1.200 bambini e ragazzi affetti da patologie gravi o croniche, offrendo loro l\'esperienza di un vero camp estivo — avventura, natura, amicizia — in totale sicurezza e con supporto medico continuo.',
      'Grazie alla partnership tra Rete Italiana Disabili ETS e Dynamo Camp Onlus, i soci di RID possono accedere ai programmi del camp con corsie prioritarie e supporto nella compilazione delle candidature. I programmi disponibili includono: Summer Camp (estate), Family Camp (per i fratelli sani e le famiglie), Respite Care (sollievo per i caregiver) e programmi specifici per patologie.',
      'La Terapia Ricreativa non è svago fine a se stesso: è un approccio clinicamente riconosciuto che utilizza le attività ricreative — equitazione adattata, laboratori artistici, arrampicata, musica, teatro — come strumenti terapeutici per migliorare il benessere fisico, emotivo e sociale dei partecipanti. Tutto lo staff è formato e molte attività sono supervisionate da medici specialisti.',
      'Per informazioni su come candidare il proprio figlio o familiare ai programmi di Dynamo Camp, contattate il nostro sportello o visitate il sito ufficiale di Dynamo Camp Onlus.',
    ],
    gallery: [
      { src: '/images/projects/health.png', alt: 'Bambini durante un\'attività all\'aperto a Dynamo Camp' },
      { src: '/images/projects/sport-inclusivo.png', alt: 'Sessione di equitazione adattata' },
      { src: '/images/projects/diversamente-divertente.png', alt: 'Momento del Family Camp con le famiglie' },
    ],
  },
  {
    id: 'fragilita-camera-deputati',
    slug: 'fragilita-camera-deputati',
    title: 'Le Fragilità nella Società Contemporanea',
    category: 'Diritti',
    categoryColor: 'blue',
    date: '2024-01-25',
    location: 'Camera dei Deputati, Roma',
    description:
      'La Presidente Katiuscia Girolametti ha partecipato al convegno alla Camera dei Deputati organizzato da ENAC e l\'Associazione Nazionale Psicologi per portare la voce delle persone con disabilità nelle istituzioni.',
    image: '/images/projects/school.png',
    href: '/progetti/fragilita-camera-deputati',
    featured: false,
    partners: ['ENAC', 'Associazione Nazionale Psicologi', 'Camera dei Deputati'],
    highlights: [
      { label: 'Deputati presenti', value: '34' },
      { label: 'Associazioni partecipanti', value: '22' },
      { label: 'Proposte presentate', value: '8' },
    ],
    fullDescription: [
      'Il 25 gennaio 2024, la Presidente di Rete Italiana Disabili ETS, Katiuscia Girolametti, è intervenuta al convegno "Le Fragilità nella Società Contemporanea", tenutosi presso la Camera dei Deputati di Roma e organizzato da ENAC e l\'Associazione Nazionale Psicologi. L\'evento ha riunito 22 associazioni del terzo settore e 34 parlamentari per un confronto istituzionale sulle politiche per la disabilità e le fragilità sociali.',
      'L\'intervento della Presidente Girolametti ha toccato tre punti fondamentali: le lacune nell\'applicazione della Legge 104/92 e le proposte di aggiornamento; il mancato riconoscimento del caregiver familiare e la necessità di una legge nazionale dedicata; l\'urgenza di un piano nazionale per l\'abbattimento delle barriere architettoniche nei comuni italiani con meno di 15.000 abitanti.',
      'Il convegno ha prodotto un documento di impegni che sarà presentato alla Commissione Affari Sociali della Camera, con otto proposte concrete di modifica legislativa. Rete Italiana Disabili ETS è stata indicata come associazione di riferimento per il monitoraggio dell\'attuazione degli impegni.',
      'La partecipazione a questa sede istituzionale rappresenta un passo importante nel percorso di Rete Italiana Disabili ETS come soggetto riconosciuto nel dibattito politico-legislativo sulla disabilità. Continueremo a portare la voce delle persone con disabilità dove le decisioni vengono prese.',
    ],
    gallery: [
      { src: '/images/projects/school.png', alt: 'La Presidente Girolametti durante il suo intervento' },
      { src: '/images/projects/convegno-autismo.png', alt: 'Sala convegni della Camera dei Deputati' },
      { src: '/images/projects/sportello-legale.png', alt: 'Firma del documento di impegni istituzionali' },
    ],
  },
]

export const NEWS = [
  {
    id: 'convenzione-onu-aggiornamento-2025',
    title: 'Aggiornamento sulla Convenzione ONU per i Diritti delle Persone con Disabilità',
    category: 'Diritti',
    categoryColor: 'blue',
    date: '2025-07-10',
    author: 'Redazione RID',
    excerpt:
      'Il Comitato ONU ha pubblicato le nuove osservazioni conclusive sull\'Italia. Analizziamo i progressi e le criticità ancora aperte.',
    image: '/images/news/onu.jpg',
    href: '/news/convenzione-onu-aggiornamento-2025',
  },
  {
    id: 'nuovo-progetto-sport-2025',
    title: 'Lanciato il nuovo programma "Sport Adattato nei Comuni"',
    category: 'Progetti',
    categoryColor: 'green',
    date: '2025-06-28',
    author: 'Team Progetti',
    excerpt:
      'In partnership con 12 comuni italiani, parte il programma pilota per portare lo sport adattato nei centri ricreativi locali.',
    image: '/images/news/sport-news.jpg',
    href: '/news/nuovo-progetto-sport-2025',
  },
  {
    id: 'accessibilita-turismo',
    title: 'Turismo accessibile: il manifesto di Rete Italiana Disabili ETS',
    category: 'Accessibilità',
    categoryColor: 'sky',
    date: '2025-06-15',
    author: 'Redazione RID',
    excerpt:
      'Abbiamo presentato al Ministero del Turismo il nostro manifesto per un turismo davvero inclusivo. Ecco le proposte.',
    image: '/images/news/tourism.jpg',
    href: '/news/accessibilita-turismo',
  },
]

export const EVENTS = [
  {
    id: 'convegno-inclusione-2025',
    title: 'Convegno Nazionale sull\'Inclusione',
    date: '2025-09-20',
    location: 'Roma – Sala della Minerva',
    type: 'Convegno',
    description: 'Un\'intera giornata di dibattito, testimonianze e proposte concrete per una società più inclusiva.',
    href: '/eventi/convegno-inclusione-2025',
    upcoming: true,
  },
  {
    id: 'sportello-diritti-Milano',
    title: 'Sportello Diritti – Milano',
    date: '2025-08-14',
    location: 'Milano – Via Torino 45',
    type: 'Sportello',
    description: 'Consulenza gratuita su diritti, sussidi e servizi per persone con disabilità e loro famiglie.',
    href: '/eventi/sportello-diritti-Milano',
    upcoming: true,
  },
  {
    id: 'maratona-inclusione',
    title: 'Maratona dell\'Inclusione',
    date: '2025-10-05',
    location: 'Nazionale – 30 città',
    type: 'Evento Sportivo',
    description: 'La corsa che unisce. Atleti con e senza disabilità insieme per sensibilizzare e raccogliere fondi.',
    href: '/eventi/maratona-inclusione',
    upcoming: true,
  },
]

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Marco Ferretti',
    role: 'Padre di Lorenzo, 14 anni',
    text: 'Grazie a Rete Italiana Disabili ETS abbiamo trovato il supporto che cercavamo per Lorenzo. Non ci siamo mai sentiti soli in questo percorso.',
    avatar: '/images/testimonials/marco.jpg',
  },
  {
    id: '2',
    name: 'Giulia Romano',
    role: 'Persona con disabilità visiva',
    text: 'Il progetto di accessibilità digitale mi ha cambiato la vita. Oggi lavoro in un\'azienda tech grazie alle competenze acquisite.',
    avatar: '/images/testimonials/giulia.jpg',
  },
  {
    id: '3',
    name: 'Dott.ssa Annamaria Costa',
    role: 'Dirigente scolastica',
    text: 'Abbiamo partecipato al programma Scuola Inclusiva e la nostra scuola è diventata un riferimento per l\'inclusione nella provincia.',
    avatar: '/images/testimonials/anna.jpg',
  },
]

export const PARTNERS = [
  { name: 'Ministero del Lavoro', href: '#' },
  { name: 'INPS', href: '#' },
  { name: 'Fondazione Cariplo', href: '#' },
  { name: 'Regione Lombardia', href: '#' },
  { name: 'Comune di Roma', href: '#' },
  { name: 'ANMIL', href: '#' },
  { name: 'Fondazione Banco di Napoli', href: '#' },
  { name: 'Università La Sapienza', href: '#' },
]

export const MISSION_CARDS = [
  {
    title: 'Inclusione',
    icon: 'users',
    color: 'sky',
    description:
      'Promuoviamo una società dove ogni persona, indipendentemente dalle proprie abilità, possa partecipare pienamente alla vita sociale, culturale e lavorativa.',
  },
  {
    title: 'Diritti',
    icon: 'shield',
    color: 'blue',
    description:
      'Difendiamo i diritti delle persone con disabilità, monitorando l\'applicazione delle leggi e proponendo miglioramenti legislativi concreti.',
  },
  {
    title: 'Partecipazione',
    icon: 'handshake',
    color: 'green',
    description:
      'Costruiamo reti tra associazioni, istituzioni, aziende e cittadini per moltiplicare l\'impatto delle azioni a favore dell\'inclusione.',
  },
]

export const WHO_WE_HELP = [
  {
    title: 'Persone con Disabilità',
    description: 'Supporto diretto, formazione, orientamento ai servizi e difesa dei diritti.',
    icon: 'accessibility',
    color: 'blue',
    href: '/chi-siamo#persone',
  },
  {
    title: 'Famiglie',
    description: 'Risorse, sportelli di ascolto e comunità di supporto per i caregiver.',
    icon: 'home',
    color: 'green',
    href: '/chi-siamo#famiglie',
  },
  {
    title: 'Istituzioni',
    description: 'Consulenza, partnership e strumenti per politiche di inclusione efficaci.',
    icon: 'building',
    color: 'orange',
    href: '/chi-siamo#istituzioni',
  },
  {
    title: 'Volontari',
    description: 'Opportunità di crescita personale e professionale attraverso l\'impegno civile.',
    icon: 'heart',
    color: 'coral',
    href: '/chi-siamo#volontari',
  },
]

export const PROJECT_CATEGORIES = [
  'Tutti',
  'Lavoro',
  'Salute',
  'Sport',
  'Formazione',
  'Diritti',
  'Sensibilizzazione',
  'Arte e Cultura',
  'Eventi',
]

export const MEMBERSHIP_TIERS = [
  {
    id: 'sostenitore',
    name: 'Socio Sostenitore',
    price: '30',
    period: 'anno',
    color: 'sky',
    features: [
      'Newsletter mensile esclusiva',
      'Accesso ai report annuali',
      'Invito agli eventi nazionali',
      'Certificato di socio',
    ],
  },
  {
    id: 'ordinario',
    name: 'Socio Ordinario',
    price: '60',
    period: 'anno',
    color: 'blue',
    featured: true,
    features: [
      'Tutto del Socio Sostenitore',
      'Diritto di voto in assemblea',
      'Accesso alle risorse riservate',
      'Consulenza legale base',
      'Priority nelle attività',
    ],
  },
  {
    id: 'fondatore',
    name: 'Socio Fondatore',
    price: '150',
    period: 'anno',
    color: 'coral',
    features: [
      'Tutto del Socio Ordinario',
      'Presenza nel registro fondatori',
      'Consulenza dedicata',
      'Invito a tavoli di lavoro',
      'Menzione pubblica (opzionale)',
    ],
  },
]
