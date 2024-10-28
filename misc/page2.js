// "use client";

// import DogList from "./dog-list";
// import DogForm from "./dog-form";
// import dogData from "./dog-data.json";
// import { useState } from "react";

// export default function Page() {
//   const [dogs, setDogs] = useState(dogData);

//   const handleAddDog = (newDog) => {
//     setDogs([...dogs, newDog]);
//   };

//   const handleDelete = (id) => {
//     const updatedDogs = dogs.filter((dog) => dog.id !== id);
//     setDogs(updatedDogs);
//   };

//   return (
//     <div>
//       <h1>Week 7</h1>
//       <DogList dogs={dogs} onDelete={handleDelete} />
//       <DogForm onAddDog={handleAddDog} />
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <div className="center-content h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold text-center mb-4">
//           Week 7 Assignment is not available yet. Please check back again soon.
//         </h1>
//       </div>
//     </main>
//   );
// }
