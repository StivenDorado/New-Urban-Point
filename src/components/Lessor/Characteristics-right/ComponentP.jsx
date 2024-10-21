import ServiceList from './ServiceList';
import DurationList from './DurationList';
import GenderList from './GenderList';
import AccommodationRules from './AccommodationRules';

export default function Component() {
  return (
    <article className="grid gap-8 max-w-2xl mx-auto p-4 md:p-8">
      <section className="grid gap-2">
        <h2 className="text-2xl font-semibold text-left">SERVICIOS INCLUIDOS</h2>
        <ServiceList />
      </section>

      <section className="grid gap-2">
        <h2 className="text-2xl font-semibold text-left">DURACIÓN DE ESTANCIA</h2>
        <DurationList />
      </section>

      <section className="grid gap-2">
        <h2 className="text-2xl font-semibold text-left">GÉNERO</h2>
        <GenderList />
      </section>

      <AccommodationRules />
    </article>
  );
}
