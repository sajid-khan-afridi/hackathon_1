import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

export default authMiddleware({
  publicRoutes: ["/", "/products" ,"/female", "/male", "/kids", "/api/cart/:path*", "/api/webhooks/:path*", "/studio/:path*"],

});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/api/cart/:path*",
    "/products/:path*",
    "/studio/:path*",
    "/(api|trpc)(.*)",
  ],
};

// publicRoutes are the routes which are used to access through without signin and signup