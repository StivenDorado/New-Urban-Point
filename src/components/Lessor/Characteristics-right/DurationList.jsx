import DurationOption from './DurationOption';

function DurationList() {
  return (
    <article className="grid sm:grid-cols-2 gap-4">
      <DurationOption id="3-months" value="3" label="3 Meses" />
      <DurationOption id="6-months" value="6" label="6 Meses" defaultChecked />
      <DurationOption id="9-months" value="9" label="9 Meses" />
      <DurationOption id="1-year" value="12" label="1 Año" />
      <DurationOption id="2-years" value="24" label="2 Años" />
      <article className="col-span-2 flex items-center gap-2">
        <input type="radio" id="custom" name="duration" value="custom" />
        <input id="custom-duration" type="number" min="1" placeholder="Custom duration (months)" />
      </article>
    </article>
  );
}

export default DurationList;
