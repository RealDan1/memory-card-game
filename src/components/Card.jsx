export default function Card({ name, image }) {
  return (
    <>
      <img src={image} alt="pokemon" className="card-image" />
      <p>
        <em>{name}</em>
      </p>
    </>
  );
}
