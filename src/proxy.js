import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
     const session = await auth.api.getSession({
        headers: await headers()
    })
    // const isLoggedIn = true; // Replace with your actual authentication logic
    // console.log(isLoggedIn)
   if (session) {
     return NextResponse.next() /*  for next js api route er jonno,eta korle request ta next js er api route e jabe, sekhane amra better auth er handler use korechi, so request ta better auth er handler e jabe, sekhane amra auth related kaj korbo*/
   } 
  return NextResponse.redirect(new URL('/signin', request.url))
}

export const config = {
  matcher: ['/career','/news:path'],  /*ekadhik route er jonno proxy korte chaile array te path gula dite hobe */
//   matcher: '/career',
}