<template>
  <div class="emuladores-container fade-in slide-in">
    <h1 class="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">Emuladores</h1>
    <p class="text-slate-500 mb-6 text-sm py-5">Links de las páginas oficiales</p>

  
    <div class="tv-container">
      <div class="emulador-grid">
        <div 
          v-for="(emulador, index) in emuladores" 
          :key="index" 
          class="emulador-card"
          @mouseover="hoveredIndex = index" 
          @mouseleave="hoveredIndex = null"
        >
          <a :href="emulador.link" target="_blank" class="emulador-link">
            <img :src="emulador.imagen" :alt="'Imagen de ' + emulador.nombre" class="emulador-imagen" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emuladores: [
        { nombre: 'PSP', link: 'https://www.ppsspp.org/', imagen: '/img/psp.png' },
        { nombre: 'Snes', link: 'https://www.snes9x.com/', imagen: '/img/snes-consoles.png' },
        { nombre: 'GameCube', link: 'https://es.dolphin-emu.org/?cr=es', imagen: '/img/gamecube-consoles.png' },
        
        
        
      ],
      hoveredIndex: null,
    };
  },
};
</script>

<style scoped>

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.slide-in {
  opacity: 0;
  transform: translateY(20px); 
  animation: slideIn 1s forwards; 
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0); 
  }
}

.emuladores-container {
  max-width: 800px; 
  margin: 0 auto;
  padding: 20px; 
  text-align: center;
}

h1 {
  font-size: 1.5rem; 
  margin-bottom: 20px;
}

.tv-container {
  background: #ffffff; 

  padding: 15px; 
  position: relative; 
  overflow: hidden; 
}


.emulador-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 0;
  justify-items: center; 
  align-items: center;  
  
}

.emulador-card {
  width: 100px; 
  height: 100px; 
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

}

.emulador-imagen {
  width: 100%; 
  height: auto;
}

.emulador-link {
  width: 100%; 
  height: 100%; 
  display: flex; 
  justify-content: center;
  align-items: center; 
}
@media (max-width: 640px) {
  h1 {
    font-size: 1.25rem; 
  }

  .emulador-card {
    width: 80px; 
    height: 80px; 
  }

  .emulador-grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;  
  }
}
</style>
