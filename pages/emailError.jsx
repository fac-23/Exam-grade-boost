import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Rewards() {
  return (
    <Layout>
      <h1>
        Sign up error, there may be an account already registered with this
        email!🚨
      </h1>
      <Link href={"/signup"}>
        <a>Return to sign up</a>
      </Link>
    </Layout>
  );
}
