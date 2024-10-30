<template>
  <div class="default-layout">
    <Navbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .default-layout {
    padding: 16px; 
  }
}
</style>
