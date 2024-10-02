import Link from "next/link";

export default function page() {
  return (
    <div className="m-4 ">
      <h1 className="font-bold pb-1 ">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <li>
        <Link href="week-2">Week 2 Assignment</Link>
      </li>
      <li>
        <Link href="week-3">Week 3 Assignment</Link>
      </li>
      <li>
        <Link href="week-4">Week 4 Assignment</Link>
      </li>
    </div>
  );
}
