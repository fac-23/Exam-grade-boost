import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <form action="/api/log-in" method="POST">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button className="button" type="submit">
          Log in
        </button>
      </form>

      <Link href={"/"} passHref>
        <button className="button">Back to landing page</button>
      </Link>
    </>
  );
}