'use client'

import { motion } from 'framer-motion'
import { Scale, FileText, GraduationCap, HeartPulse, Briefcase, Trophy } from 'lucide-react'

const SERVICES = [
  {
    title: 'Consulenza legale',
    description:
      'Supporto legale specializzato per tutelare i diritti delle persone con disabilità e delle loro famiglie.',
    icon: Scale,
  },
  {
    title: 'CAF selezionati',
    description:
      'Assistenza fiscale e previdenziale tramite centri di assistenza fiscale qualificati e attenti alle esigenze specifiche.',
    icon: FileText,
  },
  {
    title: 'Integrazione scolastica',
    description:
      'Personale di integrazione scolastico per garantire il diritto allo studio e all\u2019inclusione educativa.',
    icon: GraduationCap,
  },
  {
    title: 'Terapisti medici formati',
    description:
      'Professionisti sanitari specializzati per percorsi terapeutici personalizzati e di qualità.',
    icon: HeartPulse,
  },
  {
    title: 'Progetti lavorativi',
    description:
      'Inserimento e collaborazione delle persone disabili nel mondo del lavoro in maniera produttiva e professionale.',
    icon: Briefcase,
  },
  {
    title: 'Progetti sportivi',
    description:
      'Attività sportive inclusive per promuovere il benessere fisico, la socializzazione e l\u2019integrazione attraverso lo sport.',
    icon: Trophy,
  },
]

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-20 md:py-28 bg-brand-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-sky font-semibold text-sm uppercase tracking-widest mb-3">
            Cosa offriamo
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue text-balance"
          >
            I nostri servizi
          </h2>
          <p className="mt-4 text-lg text-brand-blue/65 max-w-2xl mx-auto leading-relaxed">
            Offriamo a tutti i nostri associati
          </p>
        </motion.div>

        <ul className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto" role="list">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <article className="flex gap-4 h-full p-6 rounded-2xl border border-brand-blue/8 bg-white shadow-sm hover:shadow-md hover:border-brand-blue/15 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-blue-muted flex items-center justify-center shrink-0">
                  <service.icon className="w-5 h-5 text-brand-blue" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-blue mb-1.5">{service.title}</h3>
                  <p className="text-brand-blue/65 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
