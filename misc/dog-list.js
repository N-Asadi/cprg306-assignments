import Dog from "./dog.js";

export default function DogList({ dogs, onDelete }) {
  return (
    <div>
      <h2>Dog List</h2>

      {dogs.map((dog) => (
        <Dog
          key={dog.id}
          id={dog.id}
          name={dog.name}
          age={dog.age}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
