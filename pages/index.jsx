import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/login" passHref>
        <button className="button">Log in</button>
      </Link>
      <Link href="/signup" passHref>
        <button className="button">Sign up</button>
      </Link>
    </>
  );
}
