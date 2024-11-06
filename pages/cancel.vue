<template>
  <div class="bg-white py-12 sm:py-6 flex flex-col items-center justify-center">
    <h1 class="text-xl font-bold text-red-700">Transacción Cancelada</h1>
    <p class="mt-4 text-sm">Parece que cancelaste el pago.</p>
    <p class="mt-4 text-sm font-bold">Si necesitas ayuda, por favor contáctanos.</p>
    <p class="mt-4 text-sm text-slate-500">Volviendo a la página principal...</p>
  </div>
</template>

<script>
export default {
  mounted() {
   
    setTimeout(() => {
      this.$router.push('/'); 
    }, 2000); 
  }
}
</script>
