export interface ExamQuestion {
  id: number
  question: string
  options: { id: string; text: string }[]
}

export const EXAM_QUESTIONS: ExamQuestion[] = [
  {
    id: 1,
    question:
      'In che modo il passaggio dal modello medico/assistenziale al "Modello Sociale" della disabilità (Convenzione ONU) cambia l\'approccio operativo e mentale di un volontario o di uno studente sul campo?',
    options: [
      {
        id: 'A',
        text: "Sposta l'attenzione sul fare del bene sostituendosi completamente alla persona in ogni necessità.",
      },
      {
        id: 'B',
        text: "Mira a rimuovere gli ostacoli ambientali e sociali che limitano l'esercizio dei diritti fondamentali, promuovendo l'autodeterminazione.",
      },
      {
        id: 'C',
        text: "Considera la disabilità esclusivamente come una patologia clinica da curare all'interno delle strutture sanitarie.",
      },
      {
        id: 'D',
        text: 'Riduce il ruolo del volontario a semplice osservatore passivo senza possibilità di interazione attiva.',
      },
    ],
  },
  {
    id: 2,
    question:
      "Perché all'interno della nostra associazione consideriamo il benessere del caregiver familiare e il concetto di respite care (weekend di sollievo) un pilastro fondamentale del welfare associativo?",
    options: [
      {
        id: 'A',
        text: 'Perché permette ai familiari di delegare totalmente e permanentemente la cura dei figli senza alcuna condivisione.',
      },
      {
        id: 'B',
        text: "Perché risponde all'emergenza della solitudine e del carico assistenziale cronico, restituendo al genitore lo spazio vitale per curare la propria salute e rigenerarsi.",
      },
      {
        id: 'C',
        text: "Perché rappresenta un'attività ricreativa esclusiva per i volontari senza alcun impatto sul nucleo familiare.",
      },
      {
        id: 'D',
        text: 'Perché serve unicamente a ridurre i costi di gestione delle strutture residenziali pubbliche.',
      },
    ],
  },
  {
    id: 3,
    question:
      "Descrivi come interverresti di fronte a un partecipante che manifesta una crisi da sovraccarico sensoriale o comportamentale durante un'attività, citando le regole del protocollo di de-escalation.",
    options: [
      {
        id: 'A',
        text: "Rimproverando immediatamente il partecipante e costringendolo a riprendere l'attività per mantenere la disciplina.",
      },
      {
        id: 'B',
        text: "Mantenendo la calma come punto di riferimento stabile, riducendo gli stimoli ambientali (spostando la persona in un'area tranquilla), rispettando la prossemica e impiegando kit sensoriali o CAA.",
      },
      {
        id: 'C',
        text: 'Isolandolo completamente in una stanza buia senza alcuna supervisione fino alla fine della giornata.',
      },
      {
        id: 'D',
        text: 'Intervenendo con la forza fisica per bloccare ogni movimento e accelerare i tempi di recupero.',
      },
    ],
  },
  {
    id: 4,
    question:
      "Qual è l'importanza dell'ascolto attivo, della pazienza e della corretta prossemica nella relazione quotidiana con una persona con disabilità cognitiva?",
    options: [
      {
        id: 'A',
        text: 'Permettono di decodificare i messaggi non verbali, abbassare l\'ansia anticipatoria e costruire un rapporto basato su autentica dignità e rispetto dello spazio personale.',
      },
      {
        id: 'B',
        text: "Servono esclusivamente a velocizzare l'esecuzione dei laboratori e dei compiti assegnati durante la giornata.",
      },
      {
        id: 'C',
        text: 'Sono tecniche formali richieste unicamente dagli enti di controllo amministrativo e prive di risvolti pratici.',
      },
      {
        id: 'D',
        text: 'Aiutano a mantenere una distanza emotiva distaccata per evitare qualsiasi forma di empatia.',
      },
    ],
  },
  {
    id: 5,
    question:
      "Per quale motivo l'associazione apre la formazione e la partecipazione ai weekend di sollievo anche ai giovani studenti a partire dai 16 anni, e qual è il valore aggiunto del loro contributo?",
    options: [
      {
        id: 'A',
        text: 'Per coprire i turni di lavoro notturno gravosi altrimenti non gestibili dal personale retribuito.',
      },
      {
        id: 'B',
        text: 'Perché portano freschezza, energia e una condivisione autentica che arricchisce profondamente sia i partecipanti che i giovani stessi, promuovendo una cultura inclusiva fin da giovanissimi.',
      },
      {
        id: 'C',
        text: 'Per assolvere a obblighi scolastici di alternanza senza reali finalità educative o sociali.',
      },
      {
        id: 'D',
        text: 'Perché i giovani richiedono una supervisione minima rispetto agli operatori esperti del settore.',
      },
    ],
  },
  {
    id: 6,
    question:
      'Perché il linguaggio inclusivo (es. l\'uso della formula "persona con disabilità" prima della diagnosi) è fondamentale per superare il pietismo e promuovere l\'empowerment?',
    options: [
      {
        id: 'A',
        text: "Perché pone l'essere umano, la sua dignità e la sua unicità sempre al primo posto rispetto alla condizione medica, respingendo etichette pietistiche o assistenzialistiche.",
      },
      {
        id: 'B',
        text: 'Perché costituisce una regola grammaticale obbligatoria imposta dai dizionari della lingua italiana.',
      },
      {
        id: 'C',
        text: 'Perché serve a nascondere la diagnosi clinica per evitare imbarazzi durante le attività pubbliche.',
      },
      {
        id: 'D',
        text: 'Perché trasforma la disabilità in una caratteristica puramente estetica priva di implicazioni sociali.',
      },
    ],
  },
]

export const EXAM_PARTICIPANT_STORAGE_KEY = 'volontari-exam-participant'
export const EXAM_RESULT_STORAGE_KEY = 'volontari-exam-result'

export interface ExamParticipant {
  nome: string
  cognome: string
  dataNascita: string
  codiceFiscale: string
  email: string
}
