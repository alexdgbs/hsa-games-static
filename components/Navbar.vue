<template>
  <div>
    <transition name="fade">
      <div
        class="bg-red-500 text-black py-2 hidden md:block"
        v-if="isSubscribed"
        :class="{'fade-in': isSubscribed, 'fade-out': !isSubscribed}"
      >
      <div class="container mx-auto flex flex-col items-center text-center">
  <span class="text-xs font-bold text-white transition duration-300 ease-in-out transform hover:scale-110">
    Prueba nuestro nuevo emulador:
    <a href="/gba.html" class="text-xs font-bold text-white underline">HSA Advance</a>
  </span>
</div>


      </div>
    </transition>

    <nav class="bg-white py-3">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-black text-2xl font-bold">
          <a href="/">
            <img src="/img/logo2.png" alt="HSA//Games" class="h-10 w-20">
          </a>
        </div>

        <div class="hidden lg:flex space-x-6 text-black text-md">
          <a href="/" class="hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110">Inicio</a>
          <a href="/precios" class="hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110">Precios</a>
          <a href="/consolas" class="hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110">Consolas</a>
          <a href="/emuladores" class="hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110">Emuladores</a>
          <a href="/pong" class="hover:text-gray-500 transition duration-300 ease-in-out transform hover:scale-110">Arcade</a>
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <div class="relative group">
            <button class="text-black text-2xl focus:outline-none transition transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM18.75 18a6.75 6.75 0 10-13.5 0h13.5z" />
              </svg>
            </button>

            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              <div v-if="isAuthenticated" class="px-4 py-2 text-gray-700 text-xs border-b border-gray-200">
                {{ email }}
              </div>
              <a v-if="!isAuthenticated" href="/register" class="text-xs block px-4 py-2 text-gray-700 hover:bg-gray-100">Registrarse / Iniciar sesión</a>
              <button v-if="isAuthenticated" @click="logout" class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-xs">Cerrar Sesión</button>
            </div>
          </div>
        </div>

        <div class="block lg:hidden relative">
          <button @click="toggleUserMenu" class="text-black focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110">
            <svg class="w-8 h-8 transition-transform duration-300 ease-in-out" :class="{'rotate-90': userMenuOpen}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <transition name="slide">
  <div v-if="userMenuOpen" class="fixed inset-0 bg-white z-50 p-4 transition-all duration-300 ease-in-out flex flex-col items-center justify-center">
    <button @click="toggleUserMenu" class="text-black focus:outline-none absolute top-4 right-4">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <ul class="flex flex-col items-center space-y-4 mt-8">
      <li><a href="/" class="block text-md hover:bg-gray-100 p-2 rounded transition duration-300">Inicio</a></li>
      <li><a href="/precios" class="block text-md hover:bg-gray-100 p-2 rounded transition duration-300">Precios</a></li>
      <li><a href="/consolas" class="block text-md hover:bg-gray-100 p-2 rounded transition duration-300">Consolas</a></li>
      <li><a href="/emuladores" class="block text-md hover:bg-gray-100 p-2 rounded transition duration-300">Emuladores</a></li>
      <li><a href="/team" class="block text-md hover:bg-gray-100 p-2 rounded transition duration-300">Team</a></li>

      <li v-if="!isAuthenticated">
        <a href="/register" class="block text-md text-sky-800 hover:bg-gray-100 p-2 rounded transition duration-300">Registrarse / Iniciar sesión</a>
      </li>
      <li v-if="isAuthenticated">
        <button @click="logout" class="block text-md text-red-500 hover:bg-gray-100 p-2 rounded transition duration-300">Cerrar Sesión</button>
      </li>
    </ul>
  </div>
</transition>
        </div>
      </div>
    </nav>

    <div v-if="isAuthenticated && ($route.path === '/')" 
      class="lg:hidden fixed bottom-0 left-0 right-0 bg-red-500 text-white shadow py-2 flex items-center justify-center hide-in-landscape">
      <span class="text-sm">Hola, {{ email }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userMenuOpen: false,
      email: '',
      isAuthenticated: false,
      isSubscribed: false,
    };
  },
  mounted() {
    this.checkAuthentication();
    window.addEventListener('storage', this.checkAuthentication);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('subscription-updated', this.handleSubscriptionUpdate);
    
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.checkAuthentication);
    window.removeEventListener('resize', this.handleResize); 
    window.removeEventListener('subscription-updated', this.handleSubscriptionUpdate);
  },
  methods: {
    handleSubscriptionUpdate(event) {
      
      if (event.detail && event.detail.isSubscribed !== undefined) {
        this.isSubscribed = event.detail.isSubscribed; 
      } else {
        this.isSubscribed = false; 
      }
    },
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen;
    },
    checkAuthentication() {
      const match = document.cookie.match(/email=([^;]+)/);
      if (match) {
        this.email = match[1];
        this.isAuthenticated = true;
        this.checkSubscription();
      } else {
        this.isAuthenticated = false;
        this.isSubscribed = false;
      }
    },
    async checkSubscription() {
      const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
      if (emailCookie) {
        const emailValue = emailCookie.split('=')[1];
        try {
          const response = await fetch(`https://api.hsa-games.com/api/user?email=${emailValue}`);
          if (response.ok) {
            const userData = await response.json();
            this.isSubscribed = userData.isSubscribed;
          }
        } catch (error) {
          console.error('Error al obtener la información del usuario:', error);
        }
      }
    },
    logout() {
      document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      this.email = '';
      this.isAuthenticated = false;
      this.isSubscribed = false;
      this.$router.push('/');
      window.dispatchEvent(new Event('user-logged-out'));
    },
    handleResize() {
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}

@media (orientation: landscape) {
  .hide-in-landscape {
    display: none;
    transform: translateY(-100%);
  }
}
@media (max-width: 768px) {
    .slide-enter-active, .slide-leave-active {
      transition: transform 0.3s ease-in-out;
    }
    .slide-enter, .slide-leave-to  {
      transform: translateY(-100%);
    }
  }

  @media (min-width: 769px) {
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.3s ease-in-out;
    }
    .fade-enter, .fade-leave-to  {
      opacity: 0;
    }
  }
</style>
