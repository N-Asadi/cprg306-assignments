import Link from "next/link";

export default function StudentInfo() {
  return (
    <header>
      <h1>Nasratullah Asadi</h1>
      <p>
        <Link href="https://github.com/N-Asadi?tab=repositories">
          Link to GitHub Repository
        </Link>
      </p>
    </header>
  );
}
