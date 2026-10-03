import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/contact-us", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/about",
};

// proxy.ts
// proxy.ts is a server-side function that intercepts requests to the "/about" route
// and redirects them to the "/contact-us" page.
// It uses Next.js's built-in NextResponse and NextRequest types to handle the request and response.
// The function can be marked as `async` if needed,
// and the configuration specifies that it should only match requests to the "/about" path.
// proxy.ts is useful for handling route redirection or rewriting logic on the server side in a Next.js application.
// proxy.ts can be customized to match different routes or patterns as needed,
// and it can also be used to implement more complex routing logic if required.

// matcher: "/about" means that any request to the "/about" route will trigger this proxy function.
// matcher can be customized to match different routes or patterns as needed.
// matcher can also be an array of strings to match multiple routes.
