import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-xl rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
