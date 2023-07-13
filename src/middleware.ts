import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/","/api/cart/:path*"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/api/cart/:path*","/(api|trpc)(.*)"],
};