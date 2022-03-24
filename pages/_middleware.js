import { NextResponse } from "next/server";

export default function middleware(req) {
  // make sure there is always a session cookie before every page loads
  const response = NextResponse.next();

  const sid = req.cookies.sid;
  const url = req.nextUrl.pathname;

  if (req.nextUrl.pathname === "/") {
    return response;
  }

  //add protected routes here
  //if no sid redirect to unauthorised

  const protectedRoutes = [
    "/home",
    "/myprofile",
    "/essayOverview",
    "/resources",
    "/introduction",
    "/spiderDiagram",
    "/body1",
    "/body2",
    "/body3",
    "/conclusion",
    "/finalEssay",
  ];

  if (!sid && protectedRoutes.includes(url)) {
    return NextResponse.rewrite(new URL("/unauthorised", req.url));
  }
}
