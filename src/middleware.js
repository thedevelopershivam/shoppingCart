import { NextResponse } from "next/server";

export async function middleware(request) {
  const authToken = request.cookies.get("token");
  console.log("token is", authToken);
  if (authToken) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url).toString());
  }
}

export const config = {
  matcher: ["/cart", "/profile", "/cart/:path*", "/profile/:path*"],
};
