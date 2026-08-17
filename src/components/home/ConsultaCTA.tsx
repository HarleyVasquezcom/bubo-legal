import { ContactForm } from '@/components/forms/ContactForm';
import { site } from '@/lib/site';

export function ConsultaCTA() {
  return (
    <section
      id="consulta"
      className="relative overflow-hidden bg-gradient-to-br from-black-900 via-black-800 to-gold-600/30 py-16 sm:py-24"
    >
      <div className="container-bubo grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Primera consulta gratuita</p>
          <h2 className="heading-display text-3xl sm:text-4xl">
            ¿Tienes un problema laboral? No enfrentes esto solo.
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-5 text-base leading-relaxed text-gray-300">
            Primera consulta sin costo. Confidencial y sin compromiso. Cuéntanos qué está pasando y
            un abogado laboralista revisará tu caso.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-300">
            <li>· Respuesta en menos de 24 horas hábiles.</li>
            <li>· Atención en toda Colombia, presencial o virtual.</li>
            <li>· {site.hours}</li>
          </ul>
        </div>

        <div className="rounded-sm border border-gold-600/40 bg-black-900/80 p-6 backdrop-blur sm:p-8">
          <h3 className="mb-5 font-serif text-xl font-semibold text-gold-400">
            Solicita tu consulta gratuita
          </h3>
          <ContactForm source="home-consulta" variant="compact" submitLabel="Solicitar consulta" />
        </div>
      </div>
    </section>
  );
}
