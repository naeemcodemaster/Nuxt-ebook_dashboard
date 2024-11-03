// middleware/auth.global.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If token is missing and user is trying to access a protected route
      if (to.path !== '/') {
        return navigateTo('/'); // Redirect to login
      }
    }
  }
});
