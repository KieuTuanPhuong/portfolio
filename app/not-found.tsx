import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-24">
      <p className="text-lg">
        This page doesn’t exist.{" "}
        <Link href="/" className="text-accent underline">
          Back to the homepage
        </Link>
      </p>
    </main>
  );
}
