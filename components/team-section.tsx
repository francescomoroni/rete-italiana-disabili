import Image from 'next/image'

const TEAM = [
  {
    name: 'Katiuscia Girolametti',
    role: 'Presidente',
    image: '/images/team/katiuscia-girolametti.webp',
  },
  {
    name: 'Giulia Vogliotti',
    role: 'Consulente Pedagogica per la Disabilità',
    image: '/images/team/giulia-vogliotti.webp',
  },
  {
    name: 'Francesca Giacomello',
    role: 'Grafica',
    image: '/images/team/francesca-giacomello.webp',
  },
  {
    name: 'Roberta Reitano',
    role: 'Referente Sicilia e Consulenza legale',
    image: '/images/team/roberta-reitano.webp',
  },
  {
    name: 'Avv. Laura Andrao',
    role: 'Consulenza legale',
    image: '/images/team/laura-andrao.webp',
  },
  {
    name: 'Renato Albino',
    role: 'Divulgatore Politiche Sociali',
    image: '/images/team/renato-albino.webp',
  },
  {
    name: 'Cristian Morato',
    role: 'Tesoriere e Referente nazionale per lo sport',
    image: '/images/team/cristian-morato.webp',
  },
  {
    name: 'Avv. Pamela Esposito',
    role: 'Consulenza legale',
    image: '/images/team/pamela-esposito.webp',
  },
  {
    name: 'Martina Ciara / Valeria Scillia',
    role: 'Social media manager',
    image: '/images/team/martina-valeria.webp',
  },
  {
    name: '2morrowLabs',
    role: 'Web development',
    image: '/images/team/2morrowlabs.png',
  },
]

export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-brand-mint py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-sky">
            Il nostro team
          </p>
          <h2
            id="team-heading"
            className="text-3xl font-extrabold text-brand-blue sm:text-4xl"
          >
            Chi rende possibile la rete
          </h2>
        </div>

        <ul
          className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {TEAM.map((member) => (
            <li key={member.name}>
              <article className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-2 ring-white sm:h-24 sm:w-24">
                  <Image
                    src={member.image}
                    alt={`Foto di ${member.name}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-brand-blue">{member.name}</h3>
                  <p className="mt-0.5 text-sm leading-snug text-brand-blue/70">
                    {member.role}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
