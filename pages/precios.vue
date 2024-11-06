<template>
  <div class="bg-white py-12 sm:py-6 animate-fade-in">
    <div class="mx-auto max-w-4xl px-4 lg:px-6">
      <div class="mx-auto max-w-xl sm:text-center">
        <h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Precios</h2>
        <p class="mt-4 text-sm leading-6 text-gray-600">Cada semana nos encargamos de añadir juegos nuevos de todas las consolas</p>
      </div>
      <div class="mx-auto mt-8 max-w-lg rounded-2xl ring-1 ring-gray-200 sm:mt-12 lg:mx-0 lg:flex lg:max-w-none animate-slide-up">
        <div class="p-4 sm:p-6 lg:flex-auto">
          <h3 class="text-xl font-bold tracking-tight text-gray-900">HSA Games</h3>
          <p class="mt-4 text-sm leading-6 text-gray-600">Nostalgia</p>
          <div class="mt-6 flex items-center gap-x-2">
            <h4 class="flex-none text-sm font-semibold leading-5 text-sky-800">¡No tienes límites de descarga!</h4>
            <div class="h-px flex-auto bg-gray-100"></div>
          </div>
          <ul role="list" class="mt-6 grid grid-cols-1 gap-3 text-xs leading-5 text-gray-600 sm:grid-cols-2 sm:gap-4">
            <li class="flex gap-x-2 animate-slide-right">
              <svg class="h-5 w-4 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Play Station Portable (PSP)
            </li>
            <li class="flex gap-x-2 animate-slide-right">
              <svg class="h-5 w-4 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Nintendo Gamecube
            </li>
            <li class="flex gap-x-2 animate-slide-right">
              <svg class="h-5 w-4 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Gameboy Advance
            </li>
            <li class="flex gap-x-2 animate-slide-right">
              <svg class="h-5 w-4 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Super Nintendo
            </li>
            <li class="flex gap-x-2 animate-slide-right">
              <svg class="h-5 w-4 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              Nintendo 64
            </li>
            <li class="flex gap-x-2 animate-slide-right">
              <svg class="h-5 w-4 flex-none text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
              </svg>
              PlayStation 2
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0 animate-slide-left">
          <div class="rounded-xl bg-gray-50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
            <div class="mx-auto max-w-xs px-6">
              <p class="text-sm font-semibold text-gray-600">Pago Mensual</p>
              <p class="mt-4 flex items-baseline justify-center gap-x-1">
                <span class="text-4xl font-bold tracking-tight text-gray-900">$49</span>
                <span class="text-xs font-semibold leading-5 tracking-wide text-gray-600">MX</span>
              </p>
              <button 
                @click="redirectToCheckout" 
                :class="{'bg-red-400 hover:bg-red-500': isSubscribed, 'bg-sky-400 hover:bg-sky-500': !isSubscribed}"
                class="mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 animate-bounce">
                {{ isSubscribed ? "Cancelar" : "Suscribirme" }}
              </button>
              <p class="mt-4 text-xs leading-4 text-gray-600">Retro-Arcade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      isSubscribed: false, 
    };
  },
  async mounted() {
    await this.checkSubscription();
  },
  methods: {
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
    redirectToCheckout() {
      const emailExists = document.cookie.split(';').some((item) => item.trim().startsWith('email='));
      if (emailExists) {
        window.location.href = '/checkout'; 
      } else {
        window.location.href = '/login';
      }
    }
  }
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-right {
  animation: slideRight 0.8s ease-out;
}

@keyframes slideRight {
  from {
    transform: translateX(-15px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-left {
  animation: slideLeft 1s ease-out;
}

@keyframes slideLeft {
  from {
    transform: translateX(15px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-bounce {
  animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
}
</style>
