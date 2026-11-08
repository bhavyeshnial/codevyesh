
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
    const url = request.nextUrl.clone();
    url.pathname = "/in";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
