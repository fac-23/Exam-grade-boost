import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Unauthorised() {
  return (
    <Layout noNav>
      <h1>Access denied 🚨</h1>
      <p>
        <Link href="/">
          <a>Log in </a>
        </Link>
        or
        <Link href="/sign-up">
          <a> Sign up </a>
        </Link>
        to access this page!
      </p>
    </Layout>
  );
}
