import ServiceCheckbox from './ServiceCheckbox';

function ServiceList() {
  const services = [
    { id: 'wifi', label: 'Wifi' },
    { id: 'electricity', label: 'Energía' },
    { id: 'tv', label: 'TV' },
    { id: 'Garaje', label: 'Garaje' },
    { id: 'kitchen', label: 'Cocina' },
    { id: 'water', label: 'Agua' },
    { id: 'washer', label: 'Lavadora' },
    { id: 'fridge', label: 'Nevera' },
    { id: 'gas', label: 'Gas' }
  ];

  return (
    <article className="grid sm:grid-cols-2 gap-4">
      {services.map(service => (
        <ServiceCheckbox key={service.id} id={service.id} label={service.label} />
      ))}
    </article>
  );
}

export default ServiceList;
