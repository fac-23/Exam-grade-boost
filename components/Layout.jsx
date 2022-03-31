import Head from "next/head";
import Navigation from "./Navigation";

export default function Layout({ noNav, children }) {
  return (
    <div>
      <Head>
        <title>Exam Boost</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/boost-logo.svg" />
      </Head>
      <header>{noNav ? <div></div> : <Navigation></Navigation>}</header>
      <main>{children}</main>
    </div>
  );
}
