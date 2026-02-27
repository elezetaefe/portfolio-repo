<script setup lang="ts">
import { RouterView } from 'vue-router';



</script>

<template>

  <header class="bg-[#ffde00] w-full border border-black">
        <!-- header/barra de navegación -->
    <div 
    class="flex flex-col md:flex-row items-center justify-between p-3 mx-auto max-w-350 md:px-20"> 
    <!-- div para el estilo de como se escriben las cosas en el header -->

    <!-- <LogoSimpsons estilus="w-[8rem] h-auto"/> para insertar el logotipo -->

        <!-- div para espaciar los botones bien -->
        <div class="flex gap-6 pt-3">
                <RouterLink to="/projects" active-class="font-bold">
                    Projects
                </RouterLink>

                <RouterLink to="/aboutMe" active-class="font-bold">
                    About me
                </RouterLink>
        </div>

    </div>
        
  </header>

  <main>   
    <RouterView />
  </main>
</template>

<style scoped>

</style>
