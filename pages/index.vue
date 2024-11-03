<template>
    <div class="login-container">
      <h2>Login Page</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'; // Import useRouter for navigation
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: ''
      };
    },
    setup() {
      const router = useRouter(); // Get the router instance
      return { router };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('https://node-type-scriptebook.vercel.app/api/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          });
  
          if (!response.ok) {
            throw new Error('Login failed. Please check your credentials.');
          }
  
          const data = await response.json();
          console.log(data);
          // Save the token to localStorage
          localStorage.setItem('token', data.accessToken);
          alert('Login successful!');
          // Navigate to the dashboard after successful login
          this.router.push('/dashboard/books'); // Redirect to the dashboard
        } catch (error) {
          this.errorMessage = error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
  }
  
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center the form vertically and horizontally */
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: rgb(23, 27, 59);
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  .error {
    color: red;
  }
  </style>
  