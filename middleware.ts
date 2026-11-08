
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers
    .get("host")
    ?.split(":")[0]
    .toLowerCase();

  if (
    (host === "www.codevyesh.in" ||
      host === "codevyesh.in") &&
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.rewrite(
      new URL("/in", request.url)
    );
  }

  if (
    (host === "www.codevyesh.in" ||
      host === "codevyesh.in") &&
    request.nextUrl.pathname === "/in"
  ) {
    return NextResponse.rewrite(
      new URL("/404", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/in"],
};
