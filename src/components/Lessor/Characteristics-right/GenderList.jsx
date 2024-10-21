import GenderOption from './GenderOption';

function GenderList() {
  return (
    <article className="grid sm:grid-cols-3 gap-4">
      <GenderOption id="male" value="male" label="Masculino" />
      <GenderOption id="female" value="female" label="Femenino" />
      <GenderOption id="other" value="other" label="Cualquiera" defaultChecked />
    </article>
  );
}

export default GenderList;
