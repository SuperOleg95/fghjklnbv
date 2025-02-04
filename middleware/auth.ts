import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

// This is an example
// function isAuthenticated(): boolean {
//   return false;
// }

// export default defineNuxtRouteMiddleware((to, from) => {
//   if (isAuthenticated() === false) {
//     console.log("Redirected from /second to .login by auth middleware!");
//     return navigateTo("/login");
//   }
// });

export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  console.log(from);
});
