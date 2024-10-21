function GenderOption({ id, value, label, defaultChecked = false }) {
    return (
      <article className="flex items-center gap-2 cursor-pointer">
        <input type="radio" id={id} name="gender" value={value} defaultChecked={defaultChecked} />
        <label htmlFor={id}>{label}</label>
      </article>
    );
  }
  
  export default GenderOption;
  