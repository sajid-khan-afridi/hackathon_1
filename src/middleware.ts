import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/","/api/cart/:path*","/api/webhooks/:path*"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/api/cart/:path*","/(api|trpc)(.*)"],
};