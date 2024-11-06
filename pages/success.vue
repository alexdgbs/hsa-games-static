<template>
    <div class="bg-white py-12 sm:py-6 flex flex-col items-center justify-center">
      <h1 class="text-xl font-bold text-green-700">¡Pago Completado!</h1>
      <p class="mt-4 text-sm">Gracias por tu compra.</p>
      <p class="mt-4 text-sm font-bold">Tu transacción fue exitosa.</p>
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
  
  <style scoped>

  body {
    margin: 0;
  }
  </style>
  
  
  