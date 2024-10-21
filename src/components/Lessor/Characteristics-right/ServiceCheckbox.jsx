function ServiceCheckbox({ id, label }) {
    return (
      <article className="flex items-center gap-2">
        <input type="checkbox" id={id} name="services" />
        <label htmlFor={id}>{label}</label>
      </article>
    );
  }
  
  export default ServiceCheckbox;
  