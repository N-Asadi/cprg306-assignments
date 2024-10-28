export default function Dog({ id, name, age, onDelete }) {
  return (
    <div>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={() => onDelete(id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
}
