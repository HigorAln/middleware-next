/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (req.url === "/api/users") {
    const value = req.headers.get("Authorization");

    if (!value) {
      return new Response("Auth required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Are"',
        },
      });
    }

    if (!req.cookies["fake.token"]) {
      //TODO

      return Response.redirect("/");
    }

    const [, token] = req.headers.get("Authorization").split(" ");

    if (token) {
      //TODO
      return;
    }
  }
}
