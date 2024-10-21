function DurationOption({ id, value, label, defaultChecked = false }) {
    return (
      <article className="flex items-center gap-2 cursor-pointer">
        <input type="radio" id={id} name="duration" value={value} defaultChecked={defaultChecked} />
        <label htmlFor={id}>{label}</label>
      </article>
    );
  }
  
  export default DurationOption;
  