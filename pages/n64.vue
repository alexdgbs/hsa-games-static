<template>
  <div class="container mx-auto p-4 fadeIn">
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <h1 v-if="isVisible" class="text-xl font-bold mb-6">Catálogo de Juegos N64</h1>
    </transition>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div 
        v-for="game in games" 
        :key="game.id" 
        class="bg-white rounded-lg p-1 transition transform game-card flex flex-col py-4"
      >
        <img 
          :src="game.cover" 
          alt="Carátula del juego" 
          class="game-image w-full h-24 object-contain rounded-lg mb-1" 
        />
        <h2 class="text-sm font-bold text-center">{{ game.name }}</h2>
        <p class="text-xs text-slate-500 font-semibold flex-grow text-center py-1">{{ game.description }}</p> 
        <div class="mt-1">
          <button
            v-if="isSubscribed || isAdmin"
            class="bg-white text-sky-800 text-xs w-full font-bold"
            @click="downloadGame(game)"
          >
            Descargar
          </button>
          <p v-else class="text-red-500 text-xs font-semibold text-center">Suscríbete para descargar</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isAdmin: false, 
      isSubscribed: false,
      games: [
        { id: 1, name: 'Jet Force Gemini', cover: '/img/jet-force-gemini.webp', downloadLink: 'https://drive.google.com/file/d/1Tzl8CtlaN00RJ_SRKsfIour88DM3gtqA/view?usp=sharing', description: 'Aventuras' },
        { id: 2, name: 'Body Harvest', cover: '/img/body-harvest.webp', downloadLink: 'https://drive.google.com/file/d/1ePA3XfwGu41INWgrOG1wUQSKJJ5tQbtF/view?usp=sharing', description: 'Acción' },
        { id: 3, name: 'Space Station Silicon Valley', cover: '/img/space-station-silicon-valley.webp', downloadLink: 'https://drive.google.com/file/d/1jLjMFyazzmieXVCCNl53TZ7IdkR_OWlp/view?usp=sharing', description: 'Plataformas' },
        { id: 4, name: 'Turok: Dinosaur Hunter', cover: '/img/turok-dinosaur-hunter-v1-2.webp', downloadLink: 'https://drive.google.com/file/d/1qUJMbZLSb52f66r-5R4MuN1FF25HOAfu/view?usp=sharing', description: 'Shooter' },
        { id: 5, name: 'Forsaken 64', cover: '/img/forsaken-64.webp', downloadLink: 'https://drive.google.com/file/d/17-GmMV5qQWnjlRSjJHytUgjXjPifh_X2/view?usp=sharing', description: 'Shooter' },
        { id: 6, name: 'Blast Corps', cover: '/img/blast-corps-v1-1.webp', downloadLink: 'https://drive.google.com/file/d/1Dp5jxtrT10vN9Ia84To5mC3cf5dPn8gp/view?usp=sharing', description: 'Estrategia' },
        { id: 7, name: 'Shadow Man', cover: '/img/shadow-man.webp', downloadLink: 'https://drive.google.com/file/d/1Z54qeeLentle9rYi6QitUqa_5JGOuBXu/view?usp=sharing', description: 'Acción' },
        { id: 8, name: 'Extreme-G', cover: '/img/extreme-g.webp', downloadLink: 'https://drive.google.com/file/d/1H_db9KDB3QT6Y4quUOwuErcwPhOsRPjV/view?usp=sharing', description: 'Carreras' },
      ],
    };
  },
  mounted() {
    this.isVisible = true; 
    const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
    if (emailCookie) {
      const emailValue = emailCookie.split('=')[1];
      this.isAdmin = emailValue === '8hsabitgames@gmail.com'; 
      this.getUserInfo(emailValue);
    }
  },
  methods: {
    async getUserInfo(email) {
      try {
        const response = await fetch(`https://api.hsa-games.com/api/user?email=${email}`);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const userData = await response.json();
        this.isSubscribed = userData.isSubscribed; 
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    },
    downloadGame(game) {
      window.location.href = game.downloadLink; 
    },
    beforeEnter(el) {
      el.style.opacity = 0; 
      el.style.transform = 'translateY(-20px)'; 
    },
    enter(el, done) {
      el.offsetHeight; 
      el.style.transition = 'opacity 0.5s, transform 0.5s'; 
      el.style.opacity = 1; 
      el.style.transform = 'translateY(0)'; 
      done(); 
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  animation: fadeIn 0.5s ease-in; 
}

.game-card {
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 100%;
}

.game-card p {
  flex-grow: 1; 
}

.game-card:hover {
  background-color: #ffffff; 

}

.game-image {
  transition: transform 0.3s; 
  margin-bottom: 10px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s; 
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
  transform: translateY(-20px); 
}
</style>
