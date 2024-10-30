<template>
  <section class="text-center py-12 bg-white">
    <img 
      src="https://imagedelivery.net/O1wVZ7MxQE_A-6UKvmaB2w/9bd66ead-a7d5-4151-8b05-0266eba36100/public"
      alt="Carátula de juego PSP"
      class="mx-auto mb-8 w-32 h-auto animate-fadeIn">
    <h1 class="text-md font-bold text-gray-900 mb-4 animate-slideIn">Tu colección de juegos clásicos a tu alcance</h1>
    <h4 class="text-sm text-gray-900 mb-4 animate-slideIn">Sin virus, sin publicidad</h4>
    <p class="text-sm text-red-500 mb-8 animate-slideIn">Descarga sin límites</p>
    <transition name="fade" @before-enter="beforeEnter" @leave="leave">
      <div class="space-x-4 flex justify-center">
        <div v-if="!isAuthenticated" key="not-authenticated" class="flex space-x-4">
          <a href="/login" class="minimal-button text-sky-800 animate-button text-md font-semibold">¡Comienza ya!</a>
          <a href="/consolas" class="minimal-button text-sky-800 border-gray-300 animate-button text-md font-semibold">Explorar Juegos</a>
        </div>
        <div v-else key="authenticated" class="flex flex-col items-center">
          <a href="/consolas" class="minimal-button text-sky-800 border-gray-300 animate-button text-md font-semibold">Explorar Juegos</a>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      isAuthenticated: false,
    };
  },
  mounted() {
    this.checkAuthentication();
    window.addEventListener('user-logged-out', this.handleLogout);
    window.addEventListener('user-logged-in', this.checkAuthentication);
  },
  beforeDestroy() {
    window.removeEventListener('user-logged-out', this.handleLogout);
    window.removeEventListener('user-logged-in', this.checkAuthentication);
  },
  methods: {
    checkAuthentication() {
      const match = document.cookie.match(/email=([^;]+)/);
      this.isAuthenticated = !!match; 
    },
    handleLogout() {
      this.isAuthenticated = false;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
    },
    leave(el, done) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-20px)';
      done();
    }
  }
};
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideIn {
  animation: slideIn 1s ease-in-out forwards;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.minimal-button {
  background: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  background-color: rgba(59, 130, 246, 0.1);
}
.animate-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
@media (max-width: 768px) {
  .text-xl {
    font-size: 1.25rem;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .minimal-button {
    padding: 0.5rem 1rem;
  }
}
</style>
