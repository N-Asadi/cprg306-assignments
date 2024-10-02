export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-gray-100 rounded-lg shadow-md mb-2 flex items-center">
      <div className="flex-grow-0 w-1/3 pr-4">
        <span className="text-lg font-medium">{name}</span>
      </div>
      <div className="w-1/3 px-4">
        <span className="text-sm text-gray-600">Qty: {quantity}</span>
      </div>
      <div className="w-1/3 pl-4">
        <span className="text-sm text-gray-500 italic">{category}</span>
      </div>
    </li>
  );
}
