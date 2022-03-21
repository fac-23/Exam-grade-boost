import Link from "next/link";
import React from "react";

export default function Signup() {
  return (
    <div>
      <form action="/api/sign-up" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required name="username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required name="password" />
        <button type="submit" className="button">
          Sign up
        </button>
      </form>
      <Link href={"/"} passHref>
        <button className="button">Back to landing page</button>
      </Link>
    </div>
  );
}