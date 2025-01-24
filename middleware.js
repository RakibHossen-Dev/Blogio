// import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
// export default withAuth;

import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export const config = {
  matcher: [
    // Match all routes except for specified files and paths
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export default withAuth;
