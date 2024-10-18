import dogData from "./dog-data.json";

import Dog from "./dog.js";

export default function DogList() {
  return (
    <div>
      <h2>Dog List</h2>

      {dogData.map((dog) => (
        <Dog key={dog.id} name={dog.name} age={dog.age} />
      ))}
    </div>
  );
}
