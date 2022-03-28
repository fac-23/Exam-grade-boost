import React from "react";
import Link from "next/link";
import Layout from "../components/Layout.jsx";

export default function LoginError() {
  return (
    <Layout>
      <h1>Password or Email Incorrect!🚨</h1>
      <Link href={"/login"}>
        <a>Return to login</a>
      </Link>
    </Layout>
  );
}
