export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center border border-gray-200">
      <div className="flex-grow-0 w-1/3 pr-4">
        <span className="text-lg font-semibold text-gray-900">{name}</span>
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
