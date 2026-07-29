import { Scale } from 'lucide-react'

type StatuteBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: { label?: string; text: string }[] }

const STATUTO_ARTICLES: {
  id: string
  tocLabel: string
  title: string
  blocks: StatuteBlock[]
}[] = [
  {
    id: 'art-1',
    tocLabel: 'Art. 1 — Costituzione',
    title: 'Art. 1 — Costituzione',
    blocks: [
      {
        type: 'paragraph',
        text: "L'Associazione è senza scopo di lucro, adotta la qualifica di APS (Associazione di Promozione Sociale) ed è disciplinata dal presente Statuto e dagli eventuali regolamenti approvati secondo le norme statutarie.",
      },
    ],
  },
  {
    id: 'art-2',
    tocLabel: 'Art. 2 — Sede',
    title: 'Art. 2 — Sede',
    blocks: [
      {
        type: 'paragraph',
        text: 'Via Liberiana 17, 00185 Roma. Il Consiglio Direttivo può trasferire la sede o istituire ulteriori sedi operative senza modifica statutaria.',
      },
    ],
  },
  {
    id: 'art-4',
    tocLabel: 'Art. 4 — Oggetto e finalità',
    title: 'Art. 4 — Oggetto e finalità',
    blocks: [
      {
        type: 'paragraph',
        text: "L'Associazione è apartitica, aconfessionale e senza scopo di lucro. Si basa sui principi di democraticità, trasparenza, solidarietà e pluralismo. Ha come scopo principale la difesa e la tutela dei diritti dei più deboli, in particolare nell'ambito della disabilità.",
      },
    ],
  },
  {
    id: 'art-5',
    tocLabel: 'Art. 5 — Attività di interesse generale',
    title: 'Art. 5 — Attività di interesse generale',
    blocks: [
      {
        type: 'list',
        items: [
          {
            label: 'Educazione e formazione:',
            text: 'istruzione, formazione professionale, attività culturali con finalità educativa e contrasto della povertà educativa.',
          },
          {
            label: 'Cultura e tempo libero:',
            text: 'attività culturali, artistiche, ricreative, turistiche e sportive dilettantistiche.',
          },
          {
            label: 'Tutela della disabilità:',
            text: 'assistenza e consulenza tecnica e giuridica, supporto ad amministratori di sostegno, progetti di vita e inserimento lavorativo.',
          },
          {
            label: 'Gestione crisi:',
            text: 'assistenza in procedure di esdebitazione e gestione della crisi da sovra-indebitamento.',
          },
        ],
      },
    ],
  },
  {
    id: 'art-6',
    tocLabel: 'Art. 6 — Associati',
    title: 'Art. 6 — Associati',
    blocks: [
      {
        type: 'paragraph',
        text: "Possono aderire tutte le persone che condividano gli scopi associativi. L'ammissione è deliberata dal Consiglio Direttivo su domanda scritta. La quota associativa annuale non è trasmissibile né ripetibile.",
      },
    ],
  },
  {
    id: 'art-7',
    tocLabel: 'Art. 7 — Diritti e doveri',
    title: 'Art. 7 — Diritti e doveri degli associati',
    blocks: [
      {
        type: 'paragraph',
        text: "Tutti gli associati hanno uguali diritti e obblighi. Gli associati in regola con la quota hanno diritto di voto e di elettorato attivo e passivo. L'attività dei volontari è personale, spontanea e gratuita.",
      },
    ],
  },
  {
    id: 'art-8',
    tocLabel: 'Art. 8 — Perdita qualità di associato',
    title: 'Art. 8 — Perdita della qualità di associato',
    blocks: [
      {
        type: 'paragraph',
        text: "La qualità di associato si perde per decesso, dimissioni volontarie, decadenza per morosità (dopo sei mesi) o esclusione per gravi motivi o comportamenti lesivi dell'immagine dell'Associazione.",
      },
    ],
  },
  {
    id: 'art-9',
    tocLabel: 'Art. 9 — Organi',
    title: "Art. 9 — Organi dell'Associazione",
    blocks: [
      {
        type: 'paragraph',
        text: "Gli organi sono: Assemblea degli Associati, Consiglio Direttivo, Presidente, Segretario Tesoriere e l'eventuale Organo di Controllo. Tutte le cariche hanno durata triennale.",
      },
    ],
  },
  {
    id: 'art-10',
    tocLabel: 'Art. 10 — Assemblea',
    title: 'Art. 10 — Assemblea degli Associati',
    blocks: [
      {
        type: 'paragraph',
        text: "L'Assemblea è il massimo organo deliberante. Ha il compito di approvare il bilancio, eleggere il Consiglio Direttivo, deliberare sulle modifiche statutarie e sullo scioglimento dell'ente.",
      },
    ],
  },
  {
    id: 'art-11',
    tocLabel: 'Art. 11 — Convocazione',
    title: "Art. 11 — Convocazione e validità dell'Assemblea",
    blocks: [
      {
        type: 'list',
        items: [
          {
            text: "L'Assemblea è convocata dal Presidente almeno una volta l'anno per l'approvazione dei bilanci.",
          },
          {
            text: 'In seconda convocazione è validamente costituita qualunque sia il numero degli intervenuti.',
          },
          {
            text: 'Le deliberazioni sono prese a maggioranza dei voti; per le modifiche statutarie occorre il voto favorevole di almeno due terzi degli intervenuti.',
          },
        ],
      },
    ],
  },
  {
    id: 'art-12',
    tocLabel: 'Art. 12 — Consiglio Direttivo',
    title: 'Art. 12 — Consiglio Direttivo',
    blocks: [
      {
        type: 'list',
        items: [
          {
            text: "È l'organo esecutivo, composto da 3 a 9 membri eletti tra gli associati.",
          },
          {
            text: 'Elegge al suo interno il Presidente e il Vice Presidente e assegna gli incarichi di Segretario e Tesoriere.',
          },
        ],
      },
    ],
  },
  {
    id: 'art-14',
    tocLabel: 'Art. 14 — Attribuzioni C.D.',
    title: 'Art. 14 — Attribuzioni del Consiglio Direttivo',
    blocks: [
      {
        type: 'paragraph',
        text: "Gestisce l'amministrazione ordinaria e straordinaria, predispone il bilancio consuntivo e preventivo e decide sull'ammissione o esclusione degli associati.",
      },
    ],
  },
  {
    id: 'art-15',
    tocLabel: 'Art. 15 — Il Presidente',
    title: 'Art. 15 — Il Presidente',
    blocks: [
      {
        type: 'paragraph',
        text: "Rappresenta legalmente l'Associazione, convoca e presiede l'Assemblea e il Consiglio Direttivo e compie gli atti di ordinaria amministrazione.",
      },
    ],
  },
  {
    id: 'art-16',
    tocLabel: 'Art. 16 — Segretario Tesoriere',
    title: 'Art. 16 — Il Segretario Tesoriere',
    blocks: [
      {
        type: 'paragraph',
        text: 'Cura la redazione dei verbali, la tenuta dei libri sociali (soci e volontari) e dei libri contabili per la predisposizione del bilancio.',
      },
    ],
  },
  {
    id: 'art-19',
    tocLabel: 'Art. 19 — Risorse economiche',
    title: 'Art. 19 — Risorse economiche',
    blocks: [
      {
        type: 'paragraph',
        text: 'Le entrate derivano da quote associative, erogazioni liberali, donazioni, raccolte fondi e contributi pubblici. È vietata la distribuzione di utili o avanzi di gestione tra gli associati.',
      },
    ],
  },
  {
    id: 'art-21',
    tocLabel: 'Art. 21 — Scioglimento',
    title: 'Art. 21 — Scioglimento',
    blocks: [
      {
        type: 'paragraph',
        text: "In caso di scioglimento, il patrimonio residuo sarà devoluto ad altro ente del Terzo Settore, previo parere dell'ufficio competente del RUNTS.",
      },
    ],
  },
  {
    id: 'art-22',
    tocLabel: 'Art. 22 — Disposizioni generali',
    title: 'Art. 22 — Disposizioni generali',
    blocks: [
      {
        type: 'paragraph',
        text: 'Per quanto non previsto, si applicano le norme del D.Lgs. 117/2017 (Codice del Terzo Settore) e del Codice Civile.',
      },
    ],
  },
]

export default function StatutoSection() {
  return (
    <section aria-labelledby="statuto-heading" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 shrink-0 text-[#1e9ed6]" aria-hidden="true" />
            <h2
              id="statuto-heading"
              className="text-3xl font-extrabold text-[#1a3a6b] sm:text-4xl"
            >
              Statuto dell&apos;Associazione
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-[#1a3a6b]/70">
            Lo Statuto disciplina la vita associativa di{' '}
            <strong className="font-semibold text-[#1a3a6b]">
              Rete Italiana Disabili — APS
            </strong>
            , redatto ai sensi del D.Lgs. 117/2017 (Codice del Terzo Settore). C.F.{' '}
            <strong className="font-semibold text-[#1a3a6b]">94083440589</strong>.
          </p>

          <nav
            aria-label="Indice degli articoli dello Statuto"
            className="rounded-2xl border border-[#1a3a6b]/10 bg-[#F8FAFC] p-6 sm:p-8"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#1e9ed6]">
              Indice degli articoli
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2" role="list">
              {STATUTO_ARTICLES.map((article) => (
                <li key={article.id}>
                  <a
                    href={`#${article.id}`}
                    className="text-[#1a3a6b]/80 transition-colors hover:text-[#1e9ed6]"
                  >
                    {article.tocLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8 pt-4">
            {STATUTO_ARTICLES.map((article) => (
              <article
                key={article.id}
                id={article.id}
                className="scroll-mt-28 border-b border-[#1a3a6b]/10 pb-8 last:border-b-0 last:pb-0"
              >
                <h3 className="mb-3 text-xl font-bold text-[#1a3a6b]">
                  {article.title}
                </h3>
                <div className="space-y-3 text-base leading-relaxed text-[#1a3a6b]/70">
                  {article.blocks.map((block, i) =>
                    block.type === 'paragraph' ? (
                      <p key={i}>{block.text}</p>
                    ) : (
                      <ul key={i} className="list-disc space-y-2 pl-5" role="list">
                        {block.items.map((item, j) => (
                          <li key={j}>
                            {item.label ? (
                              <>
                                <strong className="font-semibold text-[#1a3a6b]">
                                  {item.label}
                                </strong>{' '}
                                {item.text}
                              </>
                            ) : (
                              item.text
                            )}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
