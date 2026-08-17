import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-32 text-center">
      <div>
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="heading-display text-3xl sm:text-4xl">No encontramos esta página</h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-gray-300">
          El enlace puede estar roto o la página fue movida. Si necesitas asesoría laboral,
          escríbenos y un abogado te responde en menos de 24 horas hábiles.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Volver al inicio</ButtonLink>
          <ButtonLink href="/contacto" variant="outline">
            Consulta gratuita
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
