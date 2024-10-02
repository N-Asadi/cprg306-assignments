import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
